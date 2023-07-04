import React from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header"

const Body = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const Img = styled.img`
width: 450px;
height: 450px;
margin-top:123px;
`;

const MainText = styled.div`
color: #000;
font-size: 32px;
font-family: Inter;
font-style: normal;
font-weight: 700;
line-height: 32px;
margin-top:37px;
`;

const QuizBtn = styled.button`
margin-top:50px;
display: inline-flex;
padding: 0px 42px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: #5AFF9C;
`;

const QuizBtnText = styled.span`
color: #FFF;
font-size: 20px;
font-family: Noto Sans;
font-style: normal;
font-weight: 700;
line-height: 39px;
`;

const LinkDiv = styled.div`
margin-top:27px;
display:flex;
justify-content:center;
`;

const LinkSpanGray = styled.span`
color:#777777;
font-size: 24px;
font-family: Inter;
font-style: normal;
font-weight: 400;
line-height: 32px;
`;

const LinkSpanBlack = styled.a`
color:#000000;
font-size: 24px;
font-family: Inter;
font-style: normal;
font-weight: 400;
line-height: 32px;
`;

function Quiz() {
    return (
        <Body>
            <Header/>
            <Img src="/images/quizimg.svg"></Img>
            <MainText>안전 퀴즈를 풀어보아요!</MainText>
            <QuizBtn>
                <QuizBtnText>
                    퀴즈 도전하기
                </QuizBtnText>
            </QuizBtn>
            <LinkDiv>
                <LinkSpanGray>
                    순위가 궁금하세요?
                </LinkSpanGray>
                <LinkSpanBlack href="">
                    &nbsp;순위 확인
                </LinkSpanBlack>
            </LinkDiv>
        </Body>
    )
}

export default Quiz;