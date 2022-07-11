import { useState } from "react";

export const  useCounter = (init = 0) => {
    const [count, setCount] = useState(init);
    const add = () => setCount(count + 2);
    const subtract = () => setCount(count - 5);
    return { count, add, subtract };
};