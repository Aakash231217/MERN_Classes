import React, {useState} from 'react';

//child component
const Greeting = ({name})=>{
   return(
    <div className='bg-white p-4 rounded-lg shadow'>
      <h2 className='text-xl font-semibold'>Hello, {name}!</h2>
      <p>You are {age} years old</p>
    </div>
   );
};

const App=()=>{
  const [name,setName] = useState('');
  const[age,setAge] = useState('');

  return(
    <div className='min-h-screen bg-gray-100 items-center justify-center'>
      <div className='bg-white p-6 rounded-xl'>
        <h1 className='font-bold'>React Props Example</h1>
         <div className='space-y-2'>
          <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter your name'
            className='w-full p-3 border rounded'/>
            <input 
              type="number"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
              placeholder='Enter your age'
              className='w-full p-3 border rounded'
              />
         </div>
         {name && age &&<Greeting name={name}/>}
      </div>
    </div>
  )
}
export default App;