import { Suspense } from 'react';
import {
    FadeInContainer,
    FadeInSectionHeader,
    ParallaxContainer,
    Footer,
    Loader,
    PageHeader,
    PokemonsContainer,
    AnimatedContainer,
} from '@/app/components';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <PageHeader header="PokeLand" subheader="Catch 'em all!" />
            <main className="container mx-auto px-4 flex-grow">
                <section aria-labelledby="pokemon-section-parallax">
                    <div className="hidden lg:block">
                        <ParallaxContainer label="such wow much cool!" id="pokemon-section-parallax" />
                    </div>
                    <div className="block lg:hidden">
                        <AnimatedContainer label="such wow much cool" id="pokemon-section-parallax" />
                    </div>
                </section>
                <section aria-labelledby="pokemon-section-title" className="my-24 md:my-64">
                    <FadeInSectionHeader
                        header="Pokemons"
                        subheader="This text is animated as you scroll into view!"
                        id="pokemon-section-title"
                    />
                    <Suspense fallback={<Loader />}>
                        <FadeInContainer>
                            <PokemonsContainer />
                        </FadeInContainer>
                    </Suspense>
                </section>
            </main>
            <Footer />
        </div>
    );
}
