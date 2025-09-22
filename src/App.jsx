import './App.css'
import Event from './Event'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'


const url = 'https://jsonplaceholder.typicode.com/users';
const fetchUsers = fetch(url)
  .then((res) => res.json())

const fetchFriends = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(url);
  return res.json();
}

const fetchPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const res = await fetch(url);
  return res.json();
}

function App() {
  const fetchPromise = fetchFriends();

  const fetchPromisePost = fetchPosts();

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h4>Posts are Comming....</h4>}>
        <Posts fetchPromisePost={fetchPromisePost}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading......</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are Coming...</h3>}>
        <Friends fetchPromise={fetchPromise}></Friends>
      </Suspense> */}

      <Batsman></Batsman>
      <Counter></Counter>
    </>
  )
}
export default App
