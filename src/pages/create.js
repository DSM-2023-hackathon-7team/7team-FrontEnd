import React from 'react';
import styled from "styled-components";
import Header from "../components/common/Header";

function Create() {
    return <Wrapper>
        <Header>
            <CreateTitle>안전 사고 꿀팁 생성</CreateTitle>
            <form>
                <input type="textarea"></input>
                <input type="file"></input>
                <EndButton>생성하기</EndButton>
            </form>
        </Header>
    </Wrapper>
};

export default Create;

const Wrapper = styled.div`
    display: flex;
`;

const CreateTitle = styled.h1`
    color: #000;
    font-size: 32px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`;
const EndButton = styled.button`
    display: inline-flex;
    padding: 3px 63px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #5AFF9C;
`;