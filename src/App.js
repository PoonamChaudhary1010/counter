import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  
  const [count,setCount]=useState(0);

  function decreaseHandler(){
   setCount(count-1);
  }

  function increaseHandler(){
   setCount(count+1);
  }
  
  function resetHandler(){
   setCount(0);
  }
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col gap-10 justify-center items-center bg-[#344151]'>
      <div className='text-[#0398d4] font-medium'>Increment && Decrement</div>
      <div className='flex bg-white gap-12 justify-center py-3 rounded-sm text-[#344151]'>
        <button className='w-20 border-r-2 text-center border-[#bfbfbf] text-5xl' onClick={decreaseHandler}>-</button>
        <div className='font-normal gap-12 text-5xl text-center'>{count}</div>
        <button className='w-20 border-l-2 text-center border-[#bfbfbf] text-5xl' onClick={increaseHandler}>+</button>
      </div>
      <button className='text-white bg-[#0398d4] px-2 rounded-md font-medium text-center' onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
