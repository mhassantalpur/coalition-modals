import { useState } from "react";
import Modal from "./Modal";

const ShowModalBtn = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button 
        className="modalBtn"
        onClick={() => {setShowModal(true)}}
      >
        Make a modal
      </button>
      {showModal && <Modal closeModal={setShowModal} />}
    </>
  )
}

export default ShowModalBtn
