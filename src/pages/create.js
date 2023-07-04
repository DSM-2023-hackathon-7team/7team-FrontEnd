import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";

function Create() {
  return (
    <>
      <Header />
      <Wrapper>
        <CreateTitle>안전 사고 꿀팁 생성</CreateTitle>
        <form>
          <TitleInput type="text" placeholder="제목을 입력해주세요" />
          <TextInput placeholder="값을 입력해주세요" />
          <FileInput type="file" />
          <EndButton>생성하기</EndButton>
        </form>
      </Wrapper>
    </>
  );
}

export default Create;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateTitle = styled.h1`
  color: #000;
  margin-top: 80px;
  margin-left: -900px;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const EndButton = styled.button`
  margin-top: 50px;
  padding: 3px 63px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #5aff9c;
  color: #fff;
  font-size: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  &:hover {
    cursor: pointer;
  }
`;

const TextInput = styled.textarea`
  display: flex;
  margin-top: 35px;
  width: 1180px;
  height: 400px;
  padding: 21px 0 340px 27px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid var(--gray-gray-500, #a7a7a7);
  background: var(--system-background, #f6f6f6);
  color: var(--gray-gray-500, #a7a7a7);
  font-size: 18px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
`;

const TitleInput = styled.input`
  width: 1180px;
  height: 50px;
  margin-top: 80px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--gray-gray-700, #7c7c7c);
  color: var(--gray-gray-500, #a7a7a7);
  font-size: 18px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
`;

const FileInput = styled.input`
  display: flex;
  margin-top: 50px;
  width: 340px;
  height: 200px;
  padding: 68px 85px 69px 100px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 13px;
  flex-shrink: 0;
  border: 2px dashed var(--gray-gray-300, #d3d3d3);
  color: var(--gray-gray-300, #d3d3d3);
  font-size: 16px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  &::file-selector-button {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
