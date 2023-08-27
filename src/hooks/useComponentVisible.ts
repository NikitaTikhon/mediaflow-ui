import React, { useState, useEffect, useRef } from 'react';

interface ComponentVisibleInf {
    ref: React.MutableRefObject<HTMLDivElement | null>,
    isComponentVisible: boolean,
    setIsComponentVisible: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export const useComponentVisible = (initialIsVisible: boolean): ComponentVisibleInf => {
    const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible);
    const ref = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        } else {
            setIsComponentVisible(true);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}