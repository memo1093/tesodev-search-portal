import { useEffect } from 'react';
import './App.css';
import { Dashboard } from './layouts/Dashboard';
import {data} from './data/data.js'
function App() {
  useEffect(() => {
    localStorage.setItem("users",JSON.stringify(data))
  }, [])
  return (
    <>
      <Dashboard/>
     
    </>
  );
}

export default App;
