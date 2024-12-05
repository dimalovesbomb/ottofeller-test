interface PageHeaderProps {
    header: string;
    subheader?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ header, subheader }) => (
    <header className="text-center py-10">
        <h1 className="text-4xl font-bold" tabIndex={0}>
            {header}
        </h1>
        {subheader && (
            <p className="mt-4 text-gray-600" tabIndex={0}>
                {subheader}
            </p>
        )}
    </header>
);
