import styled from "styled-components";

const ModalBackground = ({ children, modalName, ...rest }) => {
  return <_Wrapper {...rest}>{children}</_Wrapper>;
};

export default ModalBackground;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
  position: fixed;
  overflow-y: hidden;
`;
