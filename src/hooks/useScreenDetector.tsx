'use client'
import { useState, useEffect, useCallback } from "react";

export default function useScreenDetector(px: number) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleWindowSizeChange = useCallback(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < px);
        }
    }, [px]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }
    }, [handleWindowSizeChange]);

    return isMobile;
}
