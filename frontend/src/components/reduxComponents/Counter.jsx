import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../../features/counterSlice';
import ConterAddSub from './ConterAddSub';

const Counter = () => {
    const counter = useSelector((state) => state.counter.val);
    const dispatch = useDispatch();

    const greetMsg = useSelector((state) => state.greet.msg);
    
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-8'>
            <p className='text-4xl font-bold italic underline'>{greetMsg}</p>
            <div className='flex justify-center items-center gap-4'>
                <button onClick={() => dispatch(dec())} className='bg-red-500 px-4 py-2 rounded-md shadow-md text-white font-bold text-xl'>--</button>
                <span className='font-bold text-4xl'>{counter}</span>
                <button onClick={() => dispatch(inc())} className='bg-green-500 px-4 py-2 rounded-md shadow-md text-white font-bold text-xl'>++</button>
            </div>
            <ConterAddSub />
        </div>
    )
}

export default Counter