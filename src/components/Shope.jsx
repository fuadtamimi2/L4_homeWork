import useApi from "../hooks/useApi";

function Shope() {
    const { list, loading, error } = useApi("https://monkeys.co.il/api2/shop.php");

    return (
        <div className="mb-4 p-3 border rounded">
            <h3>Shope</h3>

            {loading && <p>Loading data...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!loading && !error && (
                <ul>
                    {list.map((item, index) => (
                        <li key={item.id || index}>
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Shope;
