import styled, { css } from "styled-components";
import transitions from "../../../lib/styles/transition";

const ModalItem = ({ children, modal, width, height, ...rest }) => {
  return (
    <_Wrapper {...rest} modal={modal} width={width} height={height}>
      {children}
    </_Wrapper>
  );
};

export default ModalItem;

const _Wrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "650px")};
  height: ${({ height = 700 }) => `${height}px`};
  background-color: #fffbfb;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  justify-content: space-between;
  ${(props) =>
    props.modal
      ? css`
          animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
        `
      : css`
          animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
        `}
`;
