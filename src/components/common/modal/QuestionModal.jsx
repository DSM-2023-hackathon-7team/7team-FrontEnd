import ModalItem from "./ModalItem";
import ModalBackground from "./Background";
import { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import Question from "./Question";

const QuestionModal = () => {
  const { modal, closeModal } = useModal("Question");
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
    <ModalBackground modalName="Question" onClick={backgroundOnClick}>
      <ModalItem modal={visible} onClick={onClick} width={1500}>
        <Question />
      </ModalItem>
    </ModalBackground>
  );
};

export default QuestionModal;

