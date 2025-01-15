import { useState, useEffect } from 'react';

const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
} as const;

interface BreakpointSizes {
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
}

const useBreakpoint = (): BreakpointSizes => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        isSm: windowWidth <= BREAKPOINTS.sm && windowWidth >= BREAKPOINTS.md,
        isMd: windowWidth <= BREAKPOINTS.md && windowWidth >= BREAKPOINTS.lg,
        isLg: windowWidth <= BREAKPOINTS.lg && windowWidth >= BREAKPOINTS.xl,
        isXl: windowWidth <= BREAKPOINTS.xl,
    };
};

export default useBreakpoint;
