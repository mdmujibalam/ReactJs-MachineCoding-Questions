import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const [count, setCount] = useState(0);
  const [success,setSuccess]=useState(false);

  return (
    <>
    <h3 style={{textAlign:'center'}}>Progress Bar</h3>
     <ProgressBar 
      value={10.5}
     />
     
    </>
  )
}

export default App
