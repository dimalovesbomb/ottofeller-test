import { useEffect } from 'react';

export const useAppearOnScroll = (querySelector: string, visibleClass: string) => {
    useEffect(() => {
        const elements = document.querySelectorAll(querySelector);
        if (!elements.length) {
            console.warn(`No elements with querySelector "${querySelector}" were found`);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(visibleClass);
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [querySelector, visibleClass]);
};
