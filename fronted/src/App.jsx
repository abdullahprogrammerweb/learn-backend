import "./App.css";
import { useEffect, useState } from "react";
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.error(error);
    })
  },[])

  return (
    <>
      <h2>Abdullah full stack developer</h2>
      <p>{jokes.length}</p>
      {jokes && jokes.map((joke)=>(
        <div key={joke.id}>
          <h4>{joke.type}</h4>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
