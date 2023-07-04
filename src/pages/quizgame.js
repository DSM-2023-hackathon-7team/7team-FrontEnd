import React from "react";
import Header from "../components/common/Header";
import { styled } from "styled-components";

const Body = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const Container = styled.div`
width:1180px;
height:max-content;
`;

const QuizNum = styled.div`
margin-top:130px;
color: #000;
font-size: 24px;
font-family: Inter;
font-style: normal;
font-weight: 400;
line-height: 32px;
`;

const QuizText = styled.div`
margin-top:67px;
color: #000;
font-size: 32px;
font-family: Inter;
font-style: normal;
font-weight: 400;
line-height: 32px;
`;

const AnswerBox = styled.div`
margin-top:141px;
display:flex;
justify-content:space-around;
`;

const AnswerO = styled.button`
width: 400px;
height: 400px;
border-radius: 30px;
background: #5AFF9C;
text-align:center;
`;

const AnswerX = styled.button`
width: 400px;
height: 400px;
border-radius: 30px;
background: #DC3035;
text-align:center;
`;

const Img = styled.img`
width: 200;
height: 200px;
`;

function Quizgame() {

    return (
        <Body>
            <Header></Header>
            <Container>
                <QuizNum>문제 1 / 5</QuizNum>
                <QuizText>자전거를 탈 때에는 물구나무서기 자세로 탄다.</QuizText>
                <AnswerBox>
                    <AnswerO>
                        <Img src="/images/Ellipse.svg"></Img>
                    </AnswerO>
                    <AnswerX>
                        <Img src="/images/Vector.svg"></Img>
                    </AnswerX>
                </AnswerBox>
            </Container>
        </Body>
    )
}

export default Quizgame;