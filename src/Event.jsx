
export default function Event() {
    //? hadling Event With a Normal Function 
    function handleClick() {
        alert('I am Clicked!');
    }

    //? Handling Evenet with an Arrow Function 
    const handleClick3 = () => {
        alert('I am Clicked 3');
    }

    //? Handling Event with a Perameter with it
    const handleAdd5 = (number) => {
        const newNum = number + 5;
        alert(newNum);
    }
    return (
        <div>
            {/* <button onClick="handleClick()">Click Me</button> */}
            <button onClick={handleClick}>Click Me</button>
            <br />
            <br />

            {/* Writing Function with the onClick  */}
            <button onClick={() => {
                alert('I am Clicked Which is number Two')
            }}>Click Me 2</button>

            <br />
            <br />
            <button onClick={handleClick3}>Click Me 3</button>

            <br />
            <br />
            <button onClick={function handleClick4() {
                alert('I am Clicked which is 4');
            }}>Click me 4</button>

            <br />
            <br />
            <button onClick={() => handleAdd5(6)}>Click Add5</button>
        </div>
    );
}