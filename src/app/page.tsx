import { Suspense } from 'react';
import { FadeInContainer, FadeInSectionHeader, Footer, Loader, PageHeader, PokemonsContainer } from '@/app/components';
import { ParallaxSection } from '@/app/components/ParallaxSection';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <PageHeader header="PokeLand" subheader="Catch 'em all!" />
            <main className="container mx-auto px-4 flex-grow">
                <ParallaxSection />
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
