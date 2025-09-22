import { useState } from "react";

export default function Counter() {

    // const [state, setState] = useState(0);
    const [count, setCount] = useState(0);

    // function for addHandler 
    const addHandler = () => {
        const newValue = count + 1;
        setCount(newValue);
    }

    // styling the html element Div 
    const counterStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '100px'
    }

    return (
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={addHandler}>Add</button>
        </div>
    );
}