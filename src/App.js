import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>Click the button to create a modal</h1>
      <button 
        className="modalBtn"
        onClick={() => {setOpenModal(true)}}
      >
        Make a modal
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
