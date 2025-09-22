import { use } from "react";
import Post from "./Post";


const Posts = ({ fetchPromisePost }) => {
    const posts = use(fetchPromisePost);
    console.log(posts.length);
    return (
        <div className="card">
            <h4>All Posts will be Here</h4>
            {
                posts.map((post) => {
                    return <Post key={post.id} post={post}></Post>
                })
            }
        </div>
    );
}

export default Posts; 