import { useState } from "react";

function useCounter(defaultValue = 0) {
    const [counter, setCounter] = useState(defaultValue);

    const add1 = () => {
        setCounter((prev) => prev + 1);
    };

    const resetCounter = () => {
        setCounter(defaultValue);
    };

    return {
        counter,
        add1,
        resetCounter,
    };
}

export default useCounter;
