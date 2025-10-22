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