import React, {useState, useCallback, useRef, useEffect, useMemo} from 'react';
import Chip from '../components/Chip';
import './useChip.css'

const useChip = () => {
  //const [chipsList,setChipsList]=useState([]);
   const [chipsList, setChipsList] = useState(() => {
    const stored = sessionStorage.getItem('chipsList');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('chipsList', JSON.stringify(chipsList));
  }, [chipsList]);


  const createChip=useCallback((text)=>{
    const id=new Date().getTime();
    setChipsList((prev)=> [...prev,{id,text}]);
  },[])

  const deleteChip=useCallback((id)=>{
    setChipsList((prev)=> prev.filter((item)=> item.id !== id));
  },[])

  const ChipComponent=useMemo(()=>
    (chipsList.length ? (
    <div className="chip-wrapper">
        {chipsList.map((item,index)=>{
            return (<Chip key={item.id} text={item.text} onClose={()=>deleteChip(item.id)} />)
        })}
    </div>
  ):null),[chipsList,deleteChip]);

  return {createChip,ChipComponent};
   
}

export default useChip;