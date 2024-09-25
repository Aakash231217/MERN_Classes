import React, {useState, useEffect} from 'react';

const UseEffectDemo=()=>{
  const [count,setCount] = useState(0);
  const[name, setName] = useState('');

  useEffect(()=>{
    console.log('This effect runs on every render')
  });

  useEffect(()=>{
    console.log('This effect runs only on mount')

    return()=>{
      console.log('This cleanup functions runs on unmounting');
    };
  },[]);

  useEffect(()=>{
    console.log(`the count is now ${count}`);
  },[count]);

  useEffect(()=>{
    console.log(`The name is now :${name}`)
  },[name]);

  return(
    <div style={{
      fontFamily:'Arial, sans-serif',
      maxWidth:'600px',
      margin: '20px 0',
      display:'flex',
      gap:'20px',
      }}>
      <h2>Use Effect Demo</h2>
      <div>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment count</button>
      </div>
      <div style={{marginTop:'10px'}}>
        <p>Name:{name}</p>
        <input 
           type="text"
           value={name}
           onChange={(e)=>setName(e.target.value)}
           placeholder="Enter a name"/>
      </div>
      <p styl={{fontSize:'0.8em', color:'gray'}}>
        Check the console to see the effects
      </p>
    </div>
  )
};

const App=()=>{
  const [showdemo,setShowDemo]=useState(true);
  return(
    <div>
      <h1>React Hooks Demo App</h1>
      <div>
        <button onClick={()=>setShowDemo(!showdemo)}></button>
      </div>
    {showdemo && <UseEffectDemo/>}
    {!showdemo &&(
      <p>Use Effect Demo is hidden, Click the button above to show it agin.</p>
    )}
    </div>
  )
};

export default App;