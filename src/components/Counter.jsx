import useCounter from "../hooks/useCounter";

function Counter() {
    const { counter, add1, resetCounter } = useCounter(0);

    return (
        <div className="mb-4 p-3 border rounded">
            <h3>Counter</h3>
            <p>Value: {counter}</p>
            <button className="btn btn-primary me-2" onClick={add1}>
                Add
            </button>
            <button className="btn btn-secondary" onClick={resetCounter}>
                Reset
            </button>
        </div>
    );
}

export default Counter;
