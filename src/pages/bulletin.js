import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";

const Bulletin = () => {
  return (
    <Body>
      <Header />
      <TopBox>
        <MainText>최근 사고들</MainText>
        <AddBtn>
          <AddBtnText>게시글 작성하기</AddBtnText>
        </AddBtn>
      </TopBox>
      <ContainerBox>
        <Container>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU" />
          <TextSection>
            <Title>하하하하하하하하하하하하하하하하하하하</Title>
            <Content>
              대전 유성 사거리에서 어제 차 사고가 일어났습니다.대전 유성
              사거리에서 어제 차 사고가 일어났습니다.
            </Content>
          </TextSection>
          <Information>
            <span>댓글수 : 321</span>
            <span>조회수 : 123</span>
            <span>2023-07-05</span>
          </Information>
        </Container>
        <Container>
          <Img src="" />
          <TextSection>
            <Title>제목제목제목제목제목</Title>
            <Content>
              대전 유성 사거리에서 어제 차 사고가 일어났습니다. 어쩌고 저쩌고
              어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 해서
              보완이 필요한 것 같습니다.
            </Content>
          </TextSection>
          <Information>
            <span>댓글수 : 321</span>
            <span>조회수 : 123</span>
            <span>2023-07-05</span>
          </Information>
        </Container>

        <Container>
          <Img src="" />
          <TextSection>
            <Title>제목제목제목제목제목</Title>
            <Content>
              대전 유성 사거리에서 어제 차 사고가 일어났습니다. 어쩌고 저쩌고
              어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 해서
              보완이 필요한 것 같습니다.
            </Content>
          </TextSection>
          <Information>
            <span>댓글수 : 321</span>
            <span>조회수 : 123</span>
            <span>2023-07-05</span>
          </Information>
        </Container>
      </ContainerBox>
    </Body>
  );
};

export default Bulletin;

const Body = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  display: flex;
  height: 200px;
  justify-content: space-between;
`;

const MainText = styled.div`
  color: #000;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-top: 130px;
  margin-left: 370px;
`;

const AddBtn = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  background: #5aff9c;
  margin-top: 130px;
  margin-right: 370px;
`;

const AddBtnText = styled.div`
  color: #fff;
  font-size: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
`;

const Container = styled.div`
  width: 1600px;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  margin-top: 60px;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 160px;
  margin-bottom: 60px;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 75px;
  margin-left: 50px;
`;

const TextSection = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:50px;
  margin-top:70px;
    height:250px;
  width:800px;
  overflow-y:hidden;
`;

const Title = styled.div`
  color: #000;
  font-size: 48px;
  font-family: Inter;
  ont-style: normal;
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
  margin-top:20px;
`;

const Information = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-left: 250px;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
`;
