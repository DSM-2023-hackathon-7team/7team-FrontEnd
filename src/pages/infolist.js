import { useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import TipsList from "../components/common/list";

const InfoList = () => {
  const [checked, setChecked] = useState("인기도");

  const onClick = (initial) => {
    setChecked(initial);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Wrapper>
        <Top>
          <Title>안전 사고 꿀팁</Title>
          <Buttons>
            <SQC
              checked={checked}
              nav="인기도"
              onClick={() => onClick("인기도")}
            >
              인기도 순
            </SQC>
            <SQC
              checked={checked}
              nav="올린 날짜"
              onClick={() => onClick("올린 날짜")}
            >
              올린 날짜순
            </SQC>
            <WriteButton>생성하기</WriteButton>
          </Buttons>
        </Top>
        <Tips>
          <TipsList title="test" data="test" hearts="10" />
        </Tips>
      </Wrapper>
    </div>
  );
};

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
  width: 1180px;
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
  background: #5aff9c;
  color: #fff;
  font-size: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  margin-left: 10px;
`;

const SQC = styled.h1`
  color: ${({ checked, nav }) => (checked === nav ? "#000000" : "#999")};
  font-size: 20px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
