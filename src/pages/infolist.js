import React from 'react';
import styled from 'styled-components'
import Header from "../components/common/Header";
import TipsList from "../components/common/list";

function InfoList() {
    return (
        <div style={{overflowX:"hidden"}}>
            <Header />
            <Wrapper>
                <Top>
                    <Title>안전 사고 꿀팁</Title>
                    <Buttons>
                        <SQC style={{color:"#000"}}>인기도 순</SQC>
                        <SQC>올린 날짜순</SQC>
                        <WriteButton>생성하기</WriteButton>
                    </Buttons>
                </Top>
                <Tips>
                    <TipsList title="test" data="test" hearts="10"/>
                </Tips>
            </Wrapper>
        </div>
    )
}

export default InfoList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Top = styled.div`
    display: inline-flex;
    gap: 600px;
    align-items: center;
    margin-top: 100px;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Tips = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const Title = styled.h1`
    color: #000;
    font-size: 32px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`;

const WriteButton = styled.button`
    padding: 3px 63px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #5AFF9C;

    color: #FFF;
    font-size: 20px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
    margin-left: 10px;
`;

const SQC = styled.h1`
    color: #999;
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;