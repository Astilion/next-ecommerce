'use client'
import { useState, useEffect } from 'react';

export default function useScreenDetector(defaultIsMobile = false) {
    const [isMobile, setIsMobile] = useState(defaultIsMobile);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 1024);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return isMobile;
}