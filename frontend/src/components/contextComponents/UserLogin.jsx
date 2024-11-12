import React, { useState } from 'react'
import { useUserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const { username, setUsername, dispatch } = useUserContext();

    const [uname, setUname] = useState();
    const [firstname, setFirstname] = useState();

    const saveUsername = (e) => {
        e.preventDefault();
        setUsername(uname);
        dispatch({ type: 'SET_FIRSTNAME', payload: firstname });
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <form className='flex flex-col justify-center items-center' onSubmit={saveUsername}>
                <input className='peer p-4 w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md' type="text" placeholder='enter username' value={uname} onChange={(e) => setUname(e.target.value)} /> <br />
                <input className='peer p-4 w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md' type="text" placeholder='enter firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} /> <br />
                <input className='peer p-4 w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md' type="text" placeholder='enter lastname' onChange={(e) => dispatch({ type: 'SET_LASTNAME', payload: e.target.value })} /> <br />
                <button className='bg-indigo-500 px-4 py-2 rounded-md text-white' type="submit">save</button>
            </form>
            <h1 className='mt-2'>{username}</h1>
            <Link className='bg-indigo-500 px-4 py-2 rounded-md text-white mt-2' to={'/details'}>details</Link>
        </div>
    )
}

export default UserLogin