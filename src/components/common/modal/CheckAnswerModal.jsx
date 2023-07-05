import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import ModalBackground from "./Background";
import ModalItem from "./ModalItem";
import CheckAnswer from "./CheckAnswer";

const CheckAnswerModal = ({ quizId, result }) => {
  const { modal, closeModal } = useModal("Answer");
  const [visible, setVisible] = useState(modal.isOpen);

  const onClick = (e) => {
    e.stopPropagation();
  };

  const backgroundOnClick = () => {
    setVisible(false);
    setTimeout(() => {
      closeModal();
    }, 200);
  };

  return (
    <ModalBackground modalName="Answer" onClick={backgroundOnClick}>
      <ModalItem modal={visible} onClick={onClick} width={500} height={500}>
        <CheckAnswer quizId={quizId} result={result} />
      </ModalItem>
    </ModalBackground>
  );
};

export default CheckAnswerModal;
