import { useEffect } from 'react';
import './App.css';
import { Dashboard } from './layouts/Dashboard';
import {data} from './data/data.js'
import { useDispatch } from 'react-redux';
import { getAllUsers } from './store/actions/userActions';
function App() {
  const dispatch = useDispatch()
   
  useEffect(() => {
    localStorage.setItem("users",JSON.stringify(data))
    dispatch(getAllUsers())
  }, [dispatch])
  return (
    <>
      <Dashboard/>
     
    </>
  );
}

export default App;
