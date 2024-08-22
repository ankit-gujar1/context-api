import { useState } from 'react'
import './App.css'
import { useUserContext } from './contexts/UserContext'
import { Link } from 'react-router-dom';

function App() {

  const { username, setUsername, dispatch } = useUserContext();

  const [uname, setUname] = useState();
  const [firstname, setFirstname] = useState();

  const saveUsername = (e) => {
    e.preventDefault();
    setUsername(uname);
    dispatch({ type: 'SET_FIRSTNAME', payload: firstname });
  }

  return (
    <div>
      <form onSubmit={saveUsername}>
        <input type="text" placeholder='enter username' value={uname} onChange={(e) => setUname(e.target.value)} /> <br />
        <input type="text" placeholder='enter firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} /> <br />
        <input type="text" placeholder='enter lastname' onChange={(e) => dispatch({ type: 'SET_LASTNAME', payload: e.target.value })} /> <br />
        <button type="submit">save</button>
      </form>
      <h1>{username}</h1>
      <Link to={'/details'}>Details</Link>
    </div>
  )
}

export default App
