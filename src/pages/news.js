import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";

const Body = styled.div`
overflow-x:hidden;
`;

const MainText = styled.div`
color: #000;
font-size: 32px;
font-family: Inter;
font-style: normal;
font-weight: 700;
line-height: 32px;
margin-top:130px;
margin-left:370px;
`;

const ContainerBox = styled.div`
display:flex;
flex-direction:column;
margin-left:160px;
margin-bottom:60px;
`;

const Container = styled.a`
width:1600px;
height:400px;
border: 1px solid rgba(0, 0, 0, 0.20);
margin-top:60px;
display:flex;
`;

const Img = styled.img`
width:250px;
height:250px;
margin-top:75px;
margin-left:50px;
`;

const TextSection = styled.div`
display:flex;
flex-direction:column;
margin-left:50px;
margin-top:120px;
justify-content:space-between;
height:210px;
width:800px;
overflow-y:hidden;
`;

const Title = styled.div`
color: #000;
font-size: 48px;
font-family: Inter;
font-style: normal;
font-weight: 400;
line-height: 50px;
`;

const Content = styled.div`
color: #000;
font-size: 24px;
font-family: Inter;
font-style: normal;
font-weight: 400;
line-height: 32px;
margin-top:31px;
`;

const YMD = styled.div`
color: rgba(0, 0, 0, 0.50);
font-size: 24px;
font-family: Inter;
font-style: normal;
font-weight: 400;
line-height: 32px;
margin-left:250px;
margin-top:184px;
`;

function News() {
    return (
        <Body>
            <Header></Header>
            <MainText>안전 뉴스</MainText>
            <ContainerBox>
                <Container href="">
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU"/>
                    <TextSection>
                        <Title>하하하하하하하하하하하하하하하하하하하</Title>
                        <Content>
                            대전 유성 사거리에서 어제 차 사고가 일어났습니다.대전 유성 사거리에서 어제 차 사고가 일어났습니다.
                        </Content>
                    </TextSection>
                    <YMD>2023-07-05</YMD>
                </Container>
                <Container href="">
                    <Img src=""/>
                    <TextSection>
                        <Title>제목제목제목제목제목</Title>
                        <Content>
                            대전 유성 사거리에서 어제 차 사고가 일어났습니다.
                            어쩌고 저쩌고  어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 
                            어쩌고 저쩌고 해서 보완이 필요한 것 같습니다.
                        </Content>
                    </TextSection>
                    <YMD>2023-07-05</YMD>
                </Container>
            </ContainerBox>
        </Body>
    )
}

export default News;