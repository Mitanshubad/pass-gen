import React from 'react';
import { useState, useCallback,useEffect } from 'react';
import './App.css'; // Importing the external CSS file

function App() {
const [length , setLength] = useState(8);
const [Password , setpassword] = useState("");
const [number , setnumber]= useState(false)
const [character , setcharacter]= useState(false)

const passwordGenrator = useCallback(()=>{
 let pass = "";
 let str =" ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

 if(number) str +="0123456789";
 if(character) str+= "~!#$%^&*()_+:"
 for (let i=1;i<length ;i++){
  let char =Math.floor(Math.random()*str.length +1)
  pass += str.charAt(char)
 }

   setpassword(pass)


},[length,setpassword,number,character])



useEffect(() => {
  passwordGenrator();
 }, [length, character, number, passwordGenrator]);

  return (
    <>
      <div id='wrapper' >
        <h1 id='heading' >
          Password Generator
        </h1>
        
        <input
        id='text'
         type='text'
         value={Password}
         placeholder='password'
         readOnly
         />
          <div id='num'>
         <input
         name='numbers'
          type='checkbox'
          defaultChecked={number}
          id='numberinput'
          onChange={()=>{
            setnumber((prev)=>!prev)
          }}
         />
         <label>number</label>
         </div>

         <div id='char'>
          <input
          type='checkbox'
          defaultChecked={character}
          id='charinput'
          onChange={()=>{
            setcharacter((prev)=>!prev)
          }}
        
         />
         <label>character</label>
         </div>


         <input
         id='range'
          type='range'
          min={8}
          max={100}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}

         />
         <label>length :{length}</label>
      </div>
    </>
  );
}

export default App;
