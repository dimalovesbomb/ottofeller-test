import { useEffect } from 'react';

export const useAppearOnScroll = (querySelector: string, visibleClass: string) => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(querySelector);
            if (!elements.length) throw new Error(`No elements with querySelector "${querySelector}" were found`);

            elements.forEach((el) => {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.classList.add(visibleClass);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};
