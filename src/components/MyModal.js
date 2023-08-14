import { Link } from "react-router-dom";
import { CrossIcon } from "../icons/CrossIcon";

export const MyModal = ({ closeModal }) => {
  return (
    <div className="modal">
      <button className="modal__button" onClick={closeModal}>
        <CrossIcon />
      </button>
      <div className="modal__title">Добавлено в избранное</div>
      <Link to="/favorites" className="modal__link">
        Перейти в избранное
      </Link>
    </div>
  );
};
