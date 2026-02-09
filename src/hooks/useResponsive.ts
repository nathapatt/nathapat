import { useState, useEffect } from 'react';

// Breakpoints matching your CSS
const BREAKPOINTS = {
    mobile: 767,   // 0-767px
    tablet: 1023,  // 768-1023px
    desktop: 1024, // 1024px+
};

interface ResponsiveState {
    isMobile: boolean;   // 0-767px
    isTablet: boolean;   // 768-1023px
    isDesktop: boolean;  // 1024px+
    width: number;
}

export function useResponsive(): ResponsiveState {
    const [state, setState] = useState<ResponsiveState>(() => {
        // Initial state (SSR-safe)
        if (typeof window === 'undefined') {
            return { isMobile: false, isTablet: false, isDesktop: true, width: 1024 };
        }
        const width = window.innerWidth;
        return {
            isMobile: width <= BREAKPOINTS.mobile,
            isTablet: width >= 768 && width <= BREAKPOINTS.tablet,
            isDesktop: width >= BREAKPOINTS.desktop,
            width,
        };
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setState({
                isMobile: width <= BREAKPOINTS.mobile,
                isTablet: width >= 768 && width <= BREAKPOINTS.tablet,
                isDesktop: width >= BREAKPOINTS.desktop,
                width,
            });
        };

        // Set initial value
        handleResize();

        // Add listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return state;
}
