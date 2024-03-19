'use client'
import { useState, useEffect } from "react";

export default function useScreenDetector(px: number) {
    const [width, setWidth] = useState<number>(0)
    const [isMobile, setIsMobile] = useState(false)
    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setWidth(window.innerWidth)
        setIsMobile(width <= 768)
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [width]);

    useEffect(() => {
        setIsMobile(width <= px)
    }, [px, width])

    if(isMobile === null) {
        return false
    }

    return isMobile
}

