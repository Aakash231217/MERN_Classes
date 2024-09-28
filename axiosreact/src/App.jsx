import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App(){
  const [data,setData] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        setLoading(false);
      }
      catch(error){
        setError('An error occured while fetching');
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  if(loading)return <div>Loading....</div>
  if(error)return <div>Error....</div>

  return(
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}
export default App;
