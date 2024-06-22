import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [qapi, setQapi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.quotable.io/random');
        if(!res.ok){
          throw new Error(`HTTP error: Status ${res.status}`);
        }
        let data = await res.json();
        setQapi(data);
        setErrorMsg(null);
      } catch(err) {
        setErrorMsg(err.message);
        setQapi(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      {loading && (
        <p>Loading</p>
      )}
      {errorMsg && (
        <p>{errorMsg}</p>
      )}
      <p id='quote'>{qapi && qapi.content}</p>
      <p id='author'>{qapi && qapi.author}</p>
      <a href="">New Quote</a>
    </div>
  )
}

export default App
