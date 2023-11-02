import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [msg,setMsg] = useState('hi')

  useEffect(()=>{
    fetch("http://localhost:4000")
    .then((res)=>res.json())
    .then((data) =>setMsg(data.message))
  },[])
  return (
    <div className="App">
      <h1>hello {msg}</h1>
    </div>
  );
}

export default App;
