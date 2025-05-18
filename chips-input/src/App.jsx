import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chip from './components/Chip'
import useChip from './hooks/useChip'

function App() {
  
  const {createChip, ChipComponent}=useChip();

  const handleInputBox=(e)=>{
    if(e.key === 'Enter' && e.target.value.trim() !== ""){
     createChip(e.target.value);
    } 
  }

  return (
    <>
       {/* <Chip text="frontend"/> */}

      <div className="title">Chips Input</div>
      <div className="input-box">
        <input type="text" onKeyDown={handleInputBox}/>
      </div>

      {ChipComponent}
      
    </>
  )
}

export default App
