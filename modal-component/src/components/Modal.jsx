import React, { useState } from "react";
import "./Modal.css";
import ModalWrapper from "./ModalWrapper";

const Modal = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const data = [
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
     {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
     {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
    {
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit autem fugiat iure, doloremque architecto magni nulla vitae ea. Ipsam quibusdam voluptate rerum commodi nobis!",
    },
  ];

  return (
    <>
      <div className="btn">
        <button
          className="btn"
          onClick={show === true ? handleClose : handleShow}
        >
          {show === true ? "Close Modal" : "Show Modal"}
        </button>
      </div>

      {show && (
        <ModalWrapper closeModal={handleClose}>
          <div className="modal-title">
            My Modal Title 
          </div>
          <p className="modal-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, exercitationem.
          </p>
          <div className="modal-btn" >
            <button  onClick={handleClose}>Close</button>
          </div>
          
        </ModalWrapper>
      )}

      <div className="content">
        {data.map((item, index) => {
          return (
            <div className="data-element" key={index}>
              {item.content}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Modal;
