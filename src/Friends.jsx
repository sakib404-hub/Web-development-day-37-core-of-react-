import { use } from "react";
import Friend from "./Friend";

const Friends = ({ fetchPromise }) => {
    const friends = use(fetchPromise);
    console.log(friends.length)
    return (
        <div className="card">
            <h3>Friends : {friends.length}</h3>
            {
                friends.map((friend) => {
                    return <Friend
                        key={friend.id} friend={friend}></Friend>
                })
            }
        </div>
    );
}
export default Friends;