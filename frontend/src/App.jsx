import { useState } from 'react'
import './App.css'
import { useUserContext } from './contexts/UserContext'
import { Link } from 'react-router-dom';

function App() {

  const { username, setUsername } = useUserContext();

  const [uname, setUname] = useState();

  const saveUsername = (e) => {
    e.preventDefault();
    setUsername(uname)
  }

  return (
    <div>
      <form onSubmit={saveUsername}>
        <input type="text" placeholder='enter username' value={uname} onChange={(e) => setUname(e.target.value)} />
        <button type="submit">save</button>
      </form>
      <h1>{username}</h1>
      <Link to={'/details'}>Details</Link>
    </div>
  )
}

export default App
