import { useState } from "react";
import { createPortal } from "react-dom";
import { MyModal } from "../components/MyModal";

export const useModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const showModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const Modal = () => {
    return isModalOpened
      ? createPortal(
          <MyModal closeModal={closeModal} />,
          document.getElementById("overlay")
        )
      : null;
  };
  return {
    showModal,
    Modal
  };
};
