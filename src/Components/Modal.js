import React from 'react'
import "./Modal.css";
import ShowModalBtn from './ShowModalBtn';

const Modal = ({closeModal}) => {
  return (
    <div className='modalBg'>
      <div className='modalContainer'>
        <button className='titleCloseBtn' onClick={() => closeModal(false)}> X </button>
        <div className='title'>
          <h1>This is a Modal</h1>
        </div>
        <div className='body'>
          <p>having a transparent body is kinda cool</p>
        </div>
        <div className='footer'>
          <ShowModalBtn />
          <button className='cancelBtn' onClick={() => closeModal(false)}>Close modal</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
