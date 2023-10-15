import React from 'react'
import {useState,useCallback,useEffect,useRef} from 'react';
const App = () => {


const[length,setlength]=useState(8);
const[number,setnumber]=useState(false);
const[charecter,setcharecter]=useState(false);
const[Password,setPassword]=useState("");


//useRef hook used
const PasswordRef=useRef(null);


const passwordGenrator=useCallback(()=>{
  let pass=""
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(number) str+="1234567890";
  if(charecter)str+="~!@#$%^&*()_+><";

  for(let i=1;i<=length;i++){
   
    let char=Math.floor(Math.random()*str.length +1)
    pass+=str.charAt(char)
  }
  setPassword(pass);

},[length,number,charecter,setPassword])


const copypass=useCallback(()=>{
 
  PasswordRef.current?.select()
window.navigator.clipboard.writeText(Password)  
},[Password])

useEffect(()=>{
  passwordGenrator()
},[length,number,charecter,passwordGenrator])

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-700 '>
      <div className='flex-shadow rounded-lg overflow-hidden mb-4 flex justify-center text-center'>
        <input type='text'
        value={Password}
        className='outline-none w-full px-3 py-1  '
        placeholder='Password'
        readOnly
        ref={PasswordRef}
         />
         <button 
         onClick={copypass}
         onMouseOver={bgchange}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>
      </div>
      <div className='flex text-5m gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
           min={6}
           max={50}
           value={length}
           className='cursor-pointer'
           onChange={(e)=>{
            setlength(e.target.value)
           }}
           />
           <label htmlFor=''>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={number}
          id='numberInput'
          onChange={()=>{
            setnumber((prev)=>!prev)
          }}
          
          />
          <label htmlFor='numberInput'> Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
         
          type='checkbox'
          defaultChecked={number}
          id='charecterInput'
          onChange={()=>{
            setcharecter((prev)=>!prev)
          }}
          
          />
          <label htmlFor='numberInput'>Charecter</label>
          </div>
      </div>
    </div>

    </>
  )
}

export default App;