import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { getAccidentList } from "../apis/getAccidentList";
import { customToast } from "../utils/toast/toast";

const Bulletin = () => {
  const [accidentItems, setAccidentItems] = useState([]);

  const loadAccident = () => {
    getAccidentList()
      .then((data) => {
        const newAccidentItems = data.data.accident_list;
        setAccidentItems(newAccidentItems);
        console.log(newAccidentItems);
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 에러", "error");
      });
  };

  const onClick = (id) => {
    window.location.href = `/bulletin/${id}`;
  };

  useEffect(() => {
    loadAccident();
  }, []);

  const dateFormat = (dateString) => {
    const [date] = dateString.split("T");
    const [year, month, day] = date.split("-");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  return (
    <Body>
      <Header />
      <TopBox>
        <MainText>최근 사고들</MainText>
        <AddBtn onClick={() => window.location.href='/bulletin/create'}>게시글 작성하기</AddBtn>
      </TopBox>
      <ContainerBox>
        {accidentItems?.map((element) => {
          return (
            <Container onClick={() => onClick(element.id)} key={element.id}>
              <Img src={element.image_url} alt={element.title} />
              <TextSection>
                <Title>{element.title}</Title>
                <Content>{element.content}</Content>
              </TextSection>
              <Information>
                <span>조회수 : {element.views}</span>
                <span>{dateFormat(element.created_at)}</span>
              </Information>
            </Container>
          );
        })}
      </ContainerBox>
    </Body>
  );
};

export default Bulletin;

const Body = styled.div`
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBox = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
`;

const MainText = styled.div`
  color: #000;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const AddBtn = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  background: #5aff9c;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContainerBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  align-items: center;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const Title = styled.span`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
`;

const Content = styled.div`
  color: #000;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 20px;
`;

const Information = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 76px;
`;

const Load = styled.div`
  display: flex;
  justify-content: center;
`;
