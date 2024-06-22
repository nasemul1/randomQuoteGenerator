import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [qapi, setQapi] = useState([]);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQapi(data);
      });
  }, []);
  return (
    <div className="container">
      <p id='quote'>{qapi.content}</p>
      <p id='author'>- {qapi.author}</p>
      <button><a href="">New Quote</a></button>
    </div>
  )
}

export default App
