import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Body>
      <Header />
      <Container>
        <Text>
          안전 사고 정보,
          <br />
          <Green>SUIZ에서</Green> 확인하세요
        </Text>
        <img src="/images/Person.svg" alt="introduce" />
      </Container>
      <Container2>
        <Text2>
          <Green>안전 뉴스 기사</Green>들도 확인해보세요
          <br />
          <Link to="/news">
            <Btn>확인하기</Btn>
          </Link>
        </Text2>
        <img src="/images/magazine.svg" alt="introduce" />
      </Container2>
    </Body>
  );
}

export default Main;

const Body = styled.body`
  overflow-x: hidden;
`;

const Text = styled.div`
  color: #000;
  font-size: 52px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 70px;
  margin-top: 300px;
  margin-left: 310px;
`;

const Text2 = styled.div`
  color: #000;
  font-size: 52px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-top: 400px;
  margin-right: 183px;
  text-align: center;
`;

const Container = styled.div`
  height: 1000px;
  display: flex;
  justify-content: space-between;
`;

const Container2 = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const Green = styled.span`
  color: #5aff9c;
`;

const Btn = styled.button`
  margin-top: 50px;
  display: inline-flex;
  padding: 13px 95px;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  background: #5aff9c;
  color: #fff;
  font-size: 30px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
`;
