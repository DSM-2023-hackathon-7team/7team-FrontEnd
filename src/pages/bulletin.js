import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { getAccidentList } from "../apis/getAccidentList";
import { customToast } from "../utils/toast/toast";

const Bulletin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [accidentItems, setAccidentItems] = useState([]);

  const loadAccident = () => {
    setIsLoading(true);
    setIsLoading(null);
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
    setIsLoading(false);
  }

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
        <AddBtn>
          <AddBtnText>게시글 작성하기</AddBtnText>
        </AddBtn>
      </TopBox>
      <ContainerBox>
        {isLoading && <Load>Loading...</Load>}
        {accidentItems?.map((element) => {
          return (
            <Container key={element.id}>
              <Img src={element.image_url}/>
              <TextSection>
                <Title>{element.title}</Title>
                <Content>{element.content}</Content>
              </TextSection>
              <Information>
                <span>조회수 : {element.views}</span>
                <span>{dateFormat(element.created_at)}</span>
              </Information>
            </Container>
          )
        })}
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
  width:83.5vw;
  height:400px;
  border: 1px solid rgba(0, 0, 0, 0.20);
  margin-top:60px;
  display:flex;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  align-items:center;
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
  width:50%;
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
  margin-top: 152px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 76px;
`;

const Load = styled.div`
  display:flex;
  justify-content:center;
`;