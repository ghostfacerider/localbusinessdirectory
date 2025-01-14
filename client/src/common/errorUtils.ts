import { AxiosError } from 'axios';

export interface ErrorResponse {
    status: number;
    data: {
        errors?: { [key: string]: { message: string } };
        serverMessage?: string;
    };
}

export interface FormErrors {
    [key: string]: string | undefined;
}

export function isErrorResponse(error: unknown): error is ErrorResponse {
    return (
        (error as AxiosError).response !== undefined ||
        (error as ErrorResponse).status !== undefined
    );
}

export function handleError(
    error: unknown,
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>
) {
    if (isErrorResponse(error)) {
        if (error.status === 422 && error.data.errors) {
            const formErrors: FormErrors = Object.keys(error.data.errors).reduce(
                (acc, key) => {
                    if (error.data.errors && error.data.errors[key]) {
                        acc[key] = error.data.errors[key].message;
                    }
                    return acc;
                },
                {} as FormErrors
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
