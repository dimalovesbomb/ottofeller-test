interface PageHeaderProps {
    header: string;
    subheader?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ header, subheader }) => (
    <header className="text-center py-10">
        <h1 className="text-4xl font-bold">{header}</h1>
        {subheader && <p className="mt-4 text-gray-600">{subheader}</p>}
    </header>
);
