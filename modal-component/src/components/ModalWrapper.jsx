import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'

const ModalWrapper = ({closeModal,children}) => {

  useEffect(()=>{
    document.body.style.overflowY="hidden";

    return ()=> {
        document.body.style.overFlowY="scroll";
    }
  },[])

  return ReactDOM.createPortal(
    <>
     <div className="modal-backdrop" onClick={closeModal}></div>
     <div className='modal-wrapper'>
      {children}
    </div>
    </>, document.querySelector(".modal-root")
  );
}

export default ModalWrapper