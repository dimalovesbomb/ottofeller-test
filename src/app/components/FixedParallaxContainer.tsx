interface FixedParallaxContainerProps {
    id?: string;
    label?: string;
}

export const FixedParallaxContainer: React.FC<FixedParallaxContainerProps> = ({ label, id }) => (
    <div
        id={id}
        className="relative bg-[url('/parallax.webp')] bg-left-top md:bg-center lg:bg-cover xl:bg-right-top bg-no-repeat bg-fixed h-48 md:h-96 lg:h-[32rem] w-full"
    >
        {label && (
            <h2 className="absolute bottom-10 left-10 text-white text-xl md:text-3xl font-bold" tabIndex={0}>
                {label}
            </h2>
        )}
    </div>
);
