import { Linter } from "eslint";
import { useState, useEffect } from "react";

const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPlayers(data))
    })
    return (
        <div>
            <h4>Player : {players.length}</h4>
            <ol>
                {
                    players.map((player) => <li>player.name</li>)
                }
            </ol>
        </div>
    );
}