import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useModal } from "../../../hooks/useModal";

const CheckAnswer = () => {
  const { closeModal } = useModal("Answer");
  const [answer, setAnswer] = useState(false);

  const onClick = () => {
    closeModal();
    console.log("클릭");
  };

  useEffect(() => {
    // 정답 체크
  }, []);

  return (
    <_Wrapper>
      {answer ? (
        <>
          <_Title>
            <_Stroke answer={answer}>정답</_Stroke>입니다.
          </_Title>
          <_Circle>
            <_InnerCircle />
          </_Circle>
        </>
      ) : (
        <>
          <_Title>
            <_Stroke answer={answer}>오답</_Stroke>입니다.
          </_Title>
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103.432 75L146.075 32.3565C151.308 27.1236 151.308 18.6392 146.075 13.402L136.598 3.92472C131.365 -1.30824 122.881 -1.30824 117.643 3.92472L75 46.5682L32.3565 3.92472C27.1236 -1.30824 18.6392 -1.30824 13.402 3.92472L3.92472 13.402C-1.30824 18.6349 -1.30824 27.1193 3.92472 32.3565L46.5682 75L3.92472 117.643C-1.30824 122.876 -1.30824 131.361 3.92472 136.598L13.402 146.075C18.6349 151.308 27.1236 151.308 32.3565 146.075L75 103.432L117.643 146.075C122.876 151.308 131.365 151.308 136.598 146.075L146.075 136.598C151.308 131.365 151.308 122.881 146.075 117.643L103.432 75Z"
              fill="#DC3035"
            />
          </svg>
        </>
      )}
      <_Button onClick={onClick}>확인</_Button>
    </_Wrapper>
  );
};

export default CheckAnswer;

const _Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const _Title = styled.span`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const _Stroke = styled(_Title)`
  color: ${({ answer }) => (!answer ? "#DC3035" : "#006eff")};
`;

const _Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #006eff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _InnerCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
`;

const _Button = styled.button`
  padding: 5px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfdfd;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  border-radius: 10px;
  background-color: #5aff9c;
`;
