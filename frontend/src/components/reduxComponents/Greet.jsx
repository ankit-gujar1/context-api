import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGreetMsg } from '../../features/greetSlice';

export const Greet = () => {
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <input className='p-2 border border-r-0 rounded-r-none border-black rounded-md' type="text" placeholder='Enter message' value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button onClick={() => { dispatch(addGreetMsg(msg)), setMsg('') }} className='bg-slate-800 px-4 py-[0.58rem] rounded-md rounded-l-none text-white font-bold'>Greet</button>
        </div>
    )
}
