import {useState} from 'react';
import {ErrorResponse} from "../type/ErrorResponse";

interface UseRequestReturn {
    request: (...args: any) => void;
    isLoading: boolean;
    setIsLoading?: (value: (((prevState: boolean) => boolean) | boolean)) => void;
    error: ErrorResponse | null;
    setError?: (value: (((prevState: (ErrorResponse | null)) => (ErrorResponse | null)) | ErrorResponse | null)) => void;
}

export const useRequest = (callback: (...args: any) => void): UseRequestReturn => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorResponse | null>(null);

    const request = async (...args: any) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e: any) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    return {request, isLoading, setIsLoading, error, setError};
};

export default useRequest;