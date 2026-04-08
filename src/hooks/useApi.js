import { useEffect, useState } from "react";

function useApi(url) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    setList(data);
                } else {
                    setList([]);
                }
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        if (url) {
            getData();
        }
    }, [url]);

    return {
        list,
        loading,
        error,
    };
}

export default useApi;
