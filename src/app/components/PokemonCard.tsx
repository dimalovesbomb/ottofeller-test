import Image from 'next/image';

interface PokemonCardProps {
    name: string;
    imgSrc: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ name, imgSrc }) => (
    <div
        role="listitem"
        className="relative bg-white shadow rounded-lg p-6 hover:transform hover:scale-105 transition-transform"
        tabIndex={0}
    >
        <Image src={imgSrc} alt={`Image of ${name}`} className="mx-auto" width={96} height={96} />
        <h3 className="mt-4 text-lg text-center font-semibold text-slate-950">{name}</h3>
    </div>
);
