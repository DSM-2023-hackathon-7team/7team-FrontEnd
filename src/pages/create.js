import React from 'react';
import styled from "styled-components";
import Header from "../components/common/Header";

function Create() {
    return <>
        <Header />
            <Wrapper>
            <CreateTitle>안전 사고 꿀팁 생성</CreateTitle>
            <form>
                <input type="text"></input>
                <TextInput type="textarea"></TextInput>
                <input type="file"></input>
            <EndButton>생성하기</EndButton>
            </form>
            </Wrapper>
        </>
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
    color: #FFF;
    font-size: 20px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
`;

const TextInput = styled.input`
    display: flex;
    width: 1180px;
    height: 400px;
    padding: 21px 1011px 340px 27px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--gray-gray-500, #A7A7A7);
    background: var(--system-background, #F6F6F6)
`;

const TitleInput = styled.input`
`