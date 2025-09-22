import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0)

    const addCountingValue = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const counterStyle = {
        border: '2px solid yellow',
        padding: '20px',
        paddingRight: '100px',
        paddingLeft: '100px'
    }
    return (
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={addCountingValue}>Add</button>
        </div>
    );
}