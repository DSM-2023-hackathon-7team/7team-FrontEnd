import React from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <Body>
      <Header />
      <Img src="/images/quizimg.svg"></Img>
      <MainText>안전 퀴즈를 풀어보아요!</MainText>
      <QuizBtn>퀴즈 도전하기</QuizBtn>
      <LinkDiv>
        <LinkSpanGray>순위가 궁금하세요?&nbsp;</LinkSpanGray>
        <LinkSpanBlack to="/rank">순위 확인</LinkSpanBlack>
      </LinkDiv>
    </Body>
  );
};

export default Quiz;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x:hidden;
`;

const Img = styled.img`
  width: 450px;
  height: 450px;
  margin-top: 123px;
`;

const MainText = styled.div`
  color: #000;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-top: 37px;
`;

const QuizBtn = styled.button`
  margin-top: 50px;
  display: inline-flex;
  padding: 0px 42px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;
  background: #5aff9c;
  color: #fff;
  font-size: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
`;

const LinkDiv = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: center;
`;

const LinkSpanGray = styled.span`
  color: #777777;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

const LinkSpanBlack = styled(Link)`
  color: #000000;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
