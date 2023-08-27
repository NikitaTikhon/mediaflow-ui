import { useState, useEffect } from "react";

export const useDebounce = (value: any, delay: number): any => {
    const [debValue, setValue] = useState<string>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debValue;
}
