'use client';
import { PropsWithChildren } from 'react';
import { useAppearOnScroll } from '@/app/hooks/useAppearOnScroll';

export const FadeInContainer: React.FC<PropsWithChildren> = ({ children }) => {
    useAppearOnScroll('.block-fade-in', 'block-visible');

    return <div className="block-fade-in">{children}</div>;
};
