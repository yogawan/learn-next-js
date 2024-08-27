import { useRouter } from "next/router";

const DetailProductPage = () => {
    const { query } = useRouter();
    return (
        <div>
            <p>{query.id}</p>
        </div>
    );
};

export default DetailProductPage;