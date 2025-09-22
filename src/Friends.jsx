import { use } from "react";


const Friends = ({ fetchPromise }) => {
    const friends = use(fetchPromise);
    console.log(friends.length)
    return (
        <div>

        </div>
    );
}
export default Friends;