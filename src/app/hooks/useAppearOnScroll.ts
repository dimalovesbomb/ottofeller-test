import { useEffect } from 'react';

export const useAppearOnScroll = (querySelector: string, visibleClass: string) => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(querySelector);
            if (!elements.length) {
                console.warn(`No elements with querySelector "${querySelector}" were found`);
                return;
            }

            elements.forEach((el) => {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.classList.add(visibleClass);
                }
            });
        };

        // start animation if there's no scroll on window
        const contentHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;
        if (contentHeight <= viewportHeight) {
            handleScroll();
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [querySelector, visibleClass]);
};
