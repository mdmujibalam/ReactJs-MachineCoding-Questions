import React,{useEffect} from 'react'

const ModalWrapper = ({closeModal,children}) => {

  useEffect(()=>{
    document.body.style.overflowY="hidden";

    return ()=> {
        document.body.style.overFlowY="scroll";
    }
  },[])

  return (
    <>
     <div className="modal-backdrop" onClick={closeModal}></div>
     <div className='modal-wrapper'>
      {children}
    </div>
    </>
  )
}

export default ModalWrapper