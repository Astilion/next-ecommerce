'use client'
import { useState, useEffect } from "react";

export default function useScreenDetector(px: number) {
    const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth < px : false);
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

