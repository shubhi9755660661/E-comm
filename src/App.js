  import react from 'react'; 
  import logo from './logo.svg';
   import './App.css';
   //import Form from './Form';
   import {useState} from  'react'
//import { useEffect } from 'react';

   function App(){
    const[count,setCount]=useState(0)
    useState(()=>{
      console.log("header")
    })
      return ( 
          <div className="App">
             <h1>hey {count}</h1>
             <button onClick={()=>setCount(count+1)}>Update</button>
          </div>
      );   
      }
   
export default App;
