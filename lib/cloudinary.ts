/**
 * Cloudinary utility functions for image uploads
 */

export interface CloudinaryUploadResult {
  success: boolean
  url?: string
  publicId?: string
  error?: string
}

export interface CloudinaryConfig {
  cloudName: string
  uploadPreset: string
  folder?: string
}

// Default configuration - you can override these
const defaultConfig: CloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dwjhcbxnb',
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'voa_unsigned',
  // folder: 'voa-conference-profiles'
}

/**
 * Upload a file to Cloudinary
 * @param file - The file to upload
 * @param config - Cloudinary configuration (optional)
 * @returns Promise with upload result
 */
export const uploadToCloudinary = async (
  file: File,
  config: Partial<CloudinaryConfig> = {}
): Promise<CloudinaryUploadResult> => {
  try {
    // Merge with default config
    const finalConfig = { ...defaultConfig, ...config }
    
    // Validate required config
    if (!finalConfig.cloudName || !finalConfig.uploadPreset) {
      return {
        success: false,
        error: 'Cloudinary configuration is missing. Please check your environment variables.'
      }
    }

    // Validate file
    if (!file) {
      return {
        success: false,
        error: 'No file provided'
      }
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        error: 'Invalid file type. Please upload a JPEG, PNG, GIF, or WebP image.'
      }
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024 // 5MB in bytes
    if (file.size > maxSize) {
      return {
        success: false,
        error: 'File size too large. Please upload an image smaller than 5MB.'
      }
    }

    // Create form data
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', finalConfig.uploadPreset)
    
    // if (finalConfig.folder) {
    //   formData.append('folder', finalConfig.folder)
    // }

    // Add additional transformations
    // formData.append('transformation', 'f_auto,q_auto,w_500,h_500,c_fill,g_face')
    // formData.append('resource_type', 'image')

    console.log('Uploading to Cloudinary:', {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      folder: finalConfig.folder
    })

    // Upload to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${finalConfig.cloudName}/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Cloudinary upload failed:', errorData)
      return {
        success: false,
        error: `Upload failed: ${response.status} ${response.statusText}`
      }
    }

    const result = await response.json()
    
    console.log('Cloudinary upload successful:', {
      url: result.secure_url,
      publicId: result.public_id,
      size: result.bytes
    })

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id
    }

  } catch (error) {
    console.error('Cloudinary upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred during upload'
    }
  }
}

/**
 * Delete an image from Cloudinary
 * @param publicId - The public ID of the image to delete
 * @param config - Cloudinary configuration (optional)
 * @returns Promise with deletion result
 */
export const deleteFromCloudinary = async (
  publicId: string,
  config: Partial<CloudinaryConfig> = {}
): Promise<CloudinaryUploadResult> => {
  try {
    const finalConfig = { ...defaultConfig, ...config }
    
    if (!finalConfig.cloudName) {
      return {
        success: false,
        error: 'Cloudinary cloud name is missing'
      }
    }

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${finalConfig.cloudName}/image/destroy`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          public_id: publicId,
          // Note: You'll need to add your API secret for server-side deletion
          // For client-side, you might want to use a server action instead
        })
      }
    )

    if (!response.ok) {
      return {
        success: false,
        error: `Deletion failed: ${response.status} ${response.statusText}`
      }
    }

    const result = await response.json()
    
    return {
      success: result.result === 'ok',
      error: result.result !== 'ok' ? 'Failed to delete image' : undefined
    }

  } catch (error) {
    console.error('Cloudinary deletion error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred during deletion'
    }
  }
}

/**
 * Get optimized image URL from Cloudinary
 * @param publicId - The public ID of the image
 * @param transformations - Optional transformations
 * @param config - Cloudinary configuration (optional)
 * @returns Optimized image URL
 */
export const getCloudinaryUrl = (
  publicId: string,
  transformations: string = 'f_auto,q_auto,w_500,h_500,c_fill,g_face',
  config: Partial<CloudinaryConfig> = {}
): string => {
  const finalConfig = { ...defaultConfig, ...config }
  
  if (!finalConfig.cloudName) {
    console.error('Cloudinary cloud name is missing')
    return ''
  }

  return `https://res.cloudinary.com/${finalConfig.cloudName}/image/upload/${transformations}/${publicId}`
}

