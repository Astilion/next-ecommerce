'use client'
import { useState, useEffect } from "react";

export default function useScreenDetector(px: number) {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < px);

    useEffect(() => {
        function handleWindowSizeChange() {
            setIsMobile(window.innerWidth < px);
        }

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [px]);

    return isMobile;
}

