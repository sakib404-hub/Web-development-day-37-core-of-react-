import { useState } from "react";

const Batsman = () => {

    const [runs, setRuns] = useState(0);

    //? tracker for singles
    const [singles, setSingles] = useState(0);

    //? Traker foe the double count
    const [doubles, setDoubleCount] = useState(0);

    //? Tracker for the four hit
    const [fours, setFours] = useState(0);

    //? Tracker for the six hits
    const [sixes, setSixes] = useState(0);

    const batsManStyle = {
        padding: '10px',
        margin: '10px',
        border: '2px solid green',
        borderRadius: '20px'
    }

    const handleSingles = () => {
        const newRuns = runs + 1;
        setRuns(newRuns);

        const singleCount = singles + 1;
        setSingles(singleCount);
    }

    const handleDoubles = () => {
        const newRuns = runs + 2;
        setRuns(newRuns);

        const doublesCount = doubles;
        setDoubleCount(doublesCount);
    }

    const handleFours = () => {
        const newRuns = runs + 4;
        setRuns(newRuns);

        const foursCount = fours + 1;
        setFours(foursCount);
    }

    const handleSixes = () => {
        const newRuns = runs + 6;
        setRuns(newRuns);

        const sixCounet = sixes + 1;
        setSixes(sixCounet);
    }

    return (
        <div style={batsManStyle}>
            <h3>Player : Bangla Batsman</h3>
            {
                runs >= 50 && <p>You Scored : {runs}</p>
            }
            <h4>Score : {runs}</h4>
            <button onClick={handleSingles}>Single</button>
            <button onClick={handleDoubles}>Double</button>
            <button onClick={handleFours}>Fours</button>
            <button onClick={handleSixes}>Six</button>
        </div>
    );
}

export default Batsman; 