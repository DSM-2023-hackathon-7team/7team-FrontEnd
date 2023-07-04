import styled, { css } from "styled-components";
import { useState, useRef } from "react";

const TextField = ({
  text,
  type,
  name,
  placeholder,
  value,
  error,
  errorMsg,
  onChange,
  width,
  height,
  pattern,
  onKeyPress,
}) => {
  const [inputClick, setInputClick] = useState(false);
  const ref = useRef(null);

  return (
    <_Wrapper width={width} height={height}>
      <_UpperText value={value} inputClick={inputClick}>{text}</_UpperText>
      <_InputWrapper error={error} value={value}>
        <_Input
          ref={ref}
          type={type}
          name={name}
          pattern={pattern}
          placeholder={inputClick ? "" : placeholder}
          value={value === 0 ? "" : value}
          onChange={onChange}
          autoComplete="off"
          onFocus={() => setInputClick(true)}
          onBlur={() => setInputClick(value ? true : false)}
          onKeyPress={onKeyPress}
        />
      </_InputWrapper>
      {error && <_ErrorText>{errorMsg}</_ErrorText>}
    </_Wrapper>
  );
};

export default TextField;

const _Wrapper = styled.div`
  ${({ width = 554, height = 40 }) => css`
    width: ${width <= 100 ? `${width}%` : `${width}px`};
    height: ${height <= 100 ? `${height}px` : `${height}px`};
  `}
`;

const _InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 6px 8px;
  border-bottom: 1px solid
    ${({ value, error }) => (error ? "#DC3035" : value ? "#5AFF9C" : "#BDBDBD")};
  display: flex;
  align-items: center;
`;

const _Input = styled.input`
  width: 100%;
  height: 28px;
  background: transparent;
  color: #343434;
  line-height: 32px;
  ::placeholder {
    color: "#D3D3D3";
    line-height: 32px;
  }
`;

const _UpperText = styled.p`
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  color: "#5AFF9C";
  opacity: ${({ inputClick }) => (inputClick ? 1 : 0)};
  animation: ${({ inputClick }) =>
    inputClick
      ? css`                    
          fadeIn 0.2s ease-in-out forwards
          `
      : css`
            fadeOut 0.2s ease-in-out forwards
      `};
`;

const _ErrorText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: "#DC3035";
  line-height: 22px;
`;
