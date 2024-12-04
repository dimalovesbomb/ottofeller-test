'use client';
import { useAppearOnScroll } from '@/app/hooks/useAppearOnScroll';

interface FadeInSectionHeaderProps {
    header: string;
    subheader?: string;
    id?: string;
}

export const FadeInSectionHeader: React.FC<FadeInSectionHeaderProps> = ({ header, subheader, id }) => {
    useAppearOnScroll('.fade-in', 'visible');

    return (
        <>
            <h2 id={id} className="text-2xl font-semibold mb-6 text-center fade-in" tabIndex={0}>
                {header}
            </h2>
            {subheader && (
                <div className="fade-in my-10">
                    <p className="text-center text-lg">{subheader}</p>
                </div>
            )}
        </>
    );
};
