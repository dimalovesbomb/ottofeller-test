interface WithStatusCode {
    statusCode: number;
}

function Error({ statusCode }: { statusCode: number }) {
    return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

Error.getInitialProps = ({ res, err }: { res: WithStatusCode; err: WithStatusCode }) => {
    const statusCode: number = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
