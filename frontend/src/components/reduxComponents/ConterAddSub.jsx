import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add, sub } from '../../features/counterSlice';
import { Greet } from './Greet';

const ConterAddSub = () => {
    const [n, setN] = useState('');
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <input className='p-2 border border-black rounded-md' type="number" placeholder='Enter number' onChange={(e) => setN(e.target.value)} value={n} />
            <div className='flex justify-center items-center gap-4'>
                <button onClick={() => { dispatch(add(n)), setN('') }} className='bg-indigo-500 px-4 py-2 rounded-md shadow-md text-white font-bold'>Add</button>
                <button onClick={() => { dispatch(sub(n)), setN('') }} className='bg-pink-500 px-4 py-2 rounded-md shadow-md text-white font-bold'>Sub</button>
            </div>
            <div className='mt-4'>
                <Greet />
            </div>
        </div>
    )
}

export default ConterAddSub