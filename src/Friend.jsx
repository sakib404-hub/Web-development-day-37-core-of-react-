
const Friend = ({ friend }) => {
    console.log(friend);

    const { name, email, phone } = friend;
    return (
        <div className="card">
            <p>
                <strong>Name: </strong>
                {name}
            </p>

            <p>
                <strong>Email : </strong>
                {email}
            </p>
            <p>
                <strong>Phone : </strong>
                {phone}
            </p>
        </div>
    );
}
export default Friend;