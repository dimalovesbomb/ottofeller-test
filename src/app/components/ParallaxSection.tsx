'use client';
import { ParallaxContainer } from '@/app/components/ParallaxContainer';
import { AnimatedContainer } from '@/app/components/AnimatedContainer';
import useBreakpoint from '@/app/hooks/useBreakpoint';

export const ParallaxSection: React.FC = () => {
    const { isXl } = useBreakpoint();

    return (
        <section aria-labelledby="pokemon-section-parallax">
            {isXl ? (
                <AnimatedContainer label="such wow much cool" id="pokemon-section-parallax" />
            ) : (
                <ParallaxContainer label="such wow much cool!" id="pokemon-section-parallax" />
            )}
        </section>
    );
};
