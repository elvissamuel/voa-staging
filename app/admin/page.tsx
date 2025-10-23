'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if admin is already logged in
    const sessionData = localStorage.getItem('admin-session')
    if (sessionData) {
      try {
        JSON.parse(sessionData)
        router.push('/admin/dashboard')
        return
      } catch (err) {
        localStorage.removeItem('admin-session')
      }
    }
    
    // Redirect to login if not authenticated
    router.push('/admin/login')
  }, [router])

  return null
}
