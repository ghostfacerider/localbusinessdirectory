import { AxiosError } from 'axios';

// Define the structure of the error response from the API
export interface ErrorResponse {
  status: number;
  data: {
    errors?: { [key: string]: { message: string } };
    serverMessage?: string;
  };
}

// Define the structure of the errors for setting in state
export interface FormErrors {
  [key: string]: string | undefined; // error field name => error message
}

// Type guard to check if the error is an instance of AxiosError or matches ErrorResponse structure
export function isErrorResponse(error: unknown): error is ErrorResponse {
  return (
    (error as AxiosError).response !== undefined || // Checks if it's an AxiosError
    (error as ErrorResponse).status !== undefined
  );
}

// Function to handle error responses
export function handleError(
  error: unknown,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>, // Using the more specific type for form errors
) {
  if (isErrorResponse(error)) {
    // Handle different error statuses and set errors accordingly
    if (error.status === 422 && error.data.errors) {
      // If errors are present in the response, map them to FormErrors
      const formErrors: FormErrors = Object.keys(error.data.errors).reduce(
        (acc, key) => {
          if (error.data.errors && error.data.errors[key]) {
            acc[key] = error.data.errors[key].message;
          }
          return acc;
        },
        {} as FormErrors,
      );
      setErrors(formErrors);
    } else if (error.status === 401 && error.data.serverMessage) {
      setErrors({ serverMessage: error.data.serverMessage });
    } else {
      setErrors({ serverMessage: 'An unexpected error occurred.' });
    }
  } else {
    console.error('Unexpected error format:', error);
    setErrors({ serverMessage: 'An unknown error occurred.' });
  }
}
