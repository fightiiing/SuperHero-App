import React, { useState } from "react";
import "../modal.css";


export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
      ℹ️
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>How to Play</h2>
            <ul>
              <li>Select two characters to Fight</li>
              <li>A character can be searched for or randomly picked</li>
              <li>Some characters have a "Null" value, those values are defaulted to 20</li>
              <li>Press the Fight button until there's a winner!</li>
            </ul>
            <button className="close-modal" onClick={toggleModal}>
            X
            </button>
          </div>
        </div>
      )}
    </>
  );
}