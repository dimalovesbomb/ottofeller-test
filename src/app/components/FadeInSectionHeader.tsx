'use client';
import { useAppearOnScroll } from '@/app/hooks/useAppearOnScroll';

interface FadeInSectionHeaderProps {
    header: string;
    subheader?: string;
    id?: string;
}

export const FadeInSectionHeader: React.FC<FadeInSectionHeaderProps> = ({ header, subheader, id }) => {
    useAppearOnScroll('.text-fade-in', 'text-visible');

    return (
        <>
            <h2 id={id} className="text-2xl font-semibold mb-6 text-center text-fade-in">
                {header}
            </h2>
            {subheader && (
                <div className="text-fade-in my-10">
                    <p className="text-center text-lg">{subheader}</p>
                </div>
            )}
        </>
    );
};
