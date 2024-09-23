import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [seconds, setSeconds] = useState(0);
 useEffect(()=>{
  console.log('Component Mounted');
  const interval = setInterval(()=>{
    setSeconds(seconds=>seconds+1);
  },1000);

  return ()=>
    {
      console.log('Component unmounted');
      clearInterval(interval);
    }
 },[]);

  return (
    <>
      Seconds:{seconds}
    </>
  )
}

export default App
