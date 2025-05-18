import React from 'react'
import './Chip.css'

const Chip = ({text, onClose=()=>{}}) => {
  return (
    <>
     
     <div className="chip-input">
        {text}
         <span onClick={()=>onClose()}>x</span>
    </div>

    </>
  )
}

export default Chip;