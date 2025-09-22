
const Post = ({ post }) => {
    const { title, body } = post;
    return (
        <div className="card">
            <p>
                <strong>Title : </strong>
                {title}
            </p>
            <p>
                <strong>Body : </strong>
                {body}
            </p>
        </div>
    );
}
export default Post;