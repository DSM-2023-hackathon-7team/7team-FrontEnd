import React from "react";
import Header from "../components/common/Header";
import { styled } from "styled-components";
import transitions from "../lib/styles/transition";
import { useModal } from "../hooks/useModal";
import CheckAnswerModal from "../components/common/modal/CheckAnswerModal";

const Quizgame = () => {
  const { modal, openModal } = useModal("Answer");
  return (
    <>
      {modal.isOpen && <CheckAnswerModal />}
      <Body>
        <Header />
        <Container>
          <QuizNum>문제 1 / 5</QuizNum>
          <QuizText>자전거를 탈 때에는 물구나무서기 자세로 탄다.</QuizText>
          <AnswerBox>
            <Answer type={true} onClick={openModal}>
              <Img src="/images/Ellipse.svg" />
            </Answer>
            <Answer type={false} onClick={openModal}>
              <Img src="/images/Vector.svg" />
            </Answer>
          </AnswerBox>
        </Container>
      </Body>
    </>
  );
};

export default Quizgame;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x:hidden;
`;

const Container = styled.div`
  width: 1180px;
  height: max-content;
`;

const QuizNum = styled.div`
  margin-top: 130px;
  color: #000;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

const QuizText = styled.div`
  margin-top: 67px;
  color: #000;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

const AnswerBox = styled.div`
  margin-top: 141px;
  display: flex;
  justify-content: space-around;
`;

const Answer = styled.button`
  width: 400px;
  height: 400px;
  border-radius: 30px;
  background: ${({ type }) => (type ? "#5aff9c" : "#dc3035")};
  text-align: center;
  cursor: pointer;
  animation: ${transitions.sizedown} 0.4s;
  :hover {
    animation: ${transitions.sizeup} 0.4s;
    animation-fill-mode: forwards;
  }
`;

const Img = styled.img`
  width: 200;
  height: 200px;
`;
