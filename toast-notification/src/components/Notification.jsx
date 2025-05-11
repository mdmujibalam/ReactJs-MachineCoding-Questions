import React from "react";
import {
  AiFillInfoCircle,
  AiFillCheckCircle,
  AiFillWarning,
  AiFillCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import "./Notification.css";

const Notification = ({ type = "info", message, onClose = () => {} }) => {
  const icons = {
    success: <AiFillCheckCircle />,
    info: <AiFillInfoCircle />,
    warning: <AiFillWarning />,
    error: <AiFillCloseCircle />,
  };

  return (
    <>
      <div className={`notification ${type}`}>
        {icons[type]}
        {message}
        <AiOutlineClose className="closeBtn" onClick={() => onClose()} />
      </div>
    </>
  );
};

export default Notification;
