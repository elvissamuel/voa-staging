import { z } from "zod";
import { IApiError, IApiResponse, IValidationError } from "./models";
import { conferenceRegistrationSchema } from "./validations/conference-registration";


async function handleValidationResponse (response: Response) {
  const issues = await response.json() as IValidationError[];
  const data = await response.json() as { error: { code: string; message: string; path: string[] }[] };
  const validationErrors = data.error;

  validationErrors.forEach(error => {
    issues.push({
      rule: error.code,
      message: error.message,
      field: error.path[0],
    });
  });

  return issues;
}

async function handleServerError (response: Response) {
  const data = await response.json() as IApiError;

  return data;
}

async function handleApiCalls<T> (response: Response): Promise<IApiResponse<T>> {
  try {
    if (response.status >= 400 && response.status <= 499) {
      const data = await response.json();
      
      // Handle validation errors
      if (data.error && Array.isArray(data.error)) {
        return { validationErrors: await handleValidationResponse(response) };
      }
      
      // Handle simple error messages (like email exists)
      if (data.error && typeof data.error === 'string') {
        return { 
          error: { 
            message: data.error,
            name: 'ApiError'
          } 
        };
      }
    }

    if (response.status >= 500) {
      return { error: await handleServerError(response) };
    }

    return { data: await response.json() as T };
  } catch (error) {
    console.error("api call error", error);

    return { ...(error ? { error } : {}) } as IApiResponse<T>;
  }
}

// Conference Registration API Call
export const addConferenceRegistration = async (input: z.infer<typeof conferenceRegistrationSchema>): Promise<IApiResponse<{
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  registrationCode: string;
}>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  }));
};

// Admin Login API Call
export const adminLogin = async (input: {
  email: string;
  password: string;
}): Promise<IApiResponse<{
  admin: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    role: string;
  };
  sessionToken: string;
}>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  }));
};

// Admin Registrations API Call
export const getAdminRegistrations = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<IApiResponse<{
  success: boolean;
  data: {
    registrations: Array<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    countryOfResidence: string;
    location: string;
    ageRange: string;
    gender: string;
    joiningFromOutsideNigeria: string;
    day1Attendance: string;
    day2Attendance: string;
    currentRole: string;
    seniorityLevel: string;
    organizationName: string;
    sector: string;
    areasOfInterest: string;
    languagesSpoken: string;
    socialMediaHandle: string | null;
    category: string;
    professionalBackground: string;
    reasonsForAttending: string;
    howDidYouHear: string;
    accessibilityNeeds: string | null;
    futureEngagement: string;
    profilePhotoUrl: string | null;
    registrationCode: string;
    submittedAt: Date;
    createdAt: Date;
  }>;
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  };
}>> => {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.append('page', params.page.toString());
  if (params?.limit) searchParams.append('limit', params.limit.toString());
  if (params?.search) searchParams.append('search', params.search);

  const queryString = searchParams.toString();
  const url = process.env.NEXT_PUBLIC_BROWSER_URL + "api/admin/registrations" + (queryString ? `?${queryString}` : '');

  return handleApiCalls(await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }));
};

// Admin Statistics API Call
export const getAdminStats = async (): Promise<IApiResponse<{
  totalRegistrations: number;
  recentRegistrations: number;
  registrationsByDay: Array<{
    day1Attendance: string;
    day2Attendance: string;
    _count: { id: number };
  }>;
  registrationsByCountry: Array<{
    countryOfResidence: string;
    _count: { id: number };
  }>;
  registrationsBySector: Array<{
    sector: string;
    _count: { id: number };
  }>;
  registrationsByAge: Array<{
    ageRange: string;
    _count: { id: number };
  }>;
}>> => {
  return handleApiCalls(await fetch(process.env.NEXT_PUBLIC_BROWSER_URL + "api/admin/stats", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }));
};