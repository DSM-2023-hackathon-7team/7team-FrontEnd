import { styled } from "styled-components";
import ModalBackground from "./Background";
import ModalItem from "./ModalItem";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginModal = () => {
  const { modal, closeModal } = useModal("Auth");
  const [visible, setVisible] = useState(modal.isOpen);
  const [isSignUp, setIsSignUp] = useState(false);

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
    <ModalBackground modalName="Auth" onClick={backgroundOnClick}>
      <ModalItem modal={visible} onClick={onClick}>
        {isSignUp ? <SignUp /> : <Login setIsSignUp={setIsSignUp}/>}
      </ModalItem>
    </ModalBackground>
  );
};

export default LoginModal;