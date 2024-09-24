import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const UserList = ()=>{
  const [users,setUsers]= useState([]);
  const [loading, setLoading] = useState(true);
  const[error,setError] = useState(null);

  useEffect(()=>{
    const fetchUsers = async()=>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
          throw new Error('Failed to fetch it')
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      }
      catch(err){
        setError(err.message);
        setLoading(false);
      }
    };
    fetchUsers();
    //cleanup 
    return()=>{
      console.log('Component Unmount');
    }
  },[]);

  if(loading)return <div>Loading...</div>
  if(error)return <div>Error:{error}</div>

  return(
    <ul>
      {users.map(user=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );

};
const Counter = ()=>{
  const [count,setCount] = useState(0);

  useEffect(()=>{
    document.title=`Count:${count}`
  },[count]);

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click ME</button>
    </div>
  )
};

const App= ()=>{
  return (
    <div>
      <h1>React App with useEffect examples</h1>
      <h2>User List</h2>
      <UserList/>

      <h2>Counter</h2>
      <Counter/>
    </div>
  )
}
export default App;
