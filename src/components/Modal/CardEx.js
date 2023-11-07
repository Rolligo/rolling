import Modal from "./Modal";
import { useState } from "react";

function CardEx() {

  const [openModal, setOpenModal] = useState(false);
  
  const handleModalOpen = () => {
    setOpenModal(true);
  }

  return (
    <div>
      <div onClick={handleModalOpen}>hi</div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}
export default CardEx;