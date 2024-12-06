interface AnimatedContainerProps {
    id?: string;
    label?: string;
    imgPath?: string;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ label, id, imgPath = '/infinite-sm.webp' }) => (
    <div>
        <div
            id={id}
            className="relative h-16 w-full parallax-small animate-parallax"
            style={{ backgroundImage: `url(${imgPath})` }}
        />
        <div
            id={id}
            className="relative h-48 w-full parallax-big animate-parallax"
            style={{ backgroundImage: `url(${imgPath})` }}
        >
            {label && (
                <h2 className="absolute bottom-[10%] left-[5%] text-white text-xl md:text-3xl font-bold">{label}</h2>
            )}
        </div>
    </div>
);
