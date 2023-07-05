import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { getRank } from "../apis/getRank";
import { customToast } from "../utils/toast/toast";

const Rank = () => {
  const [state, setState] = useState({
    my_name: "",
    rank: 0,
    point: 0,
  });
  
  useEffect(() => {
    getRank()
      .then(({ data }) => {
        setState(data);
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 에러", "error");
      });
  }, []);

  return (
    <Body>
      <Header />
      <Img src="/images/trophy.svg"></Img>
      <Text1>
        {state.my_name}님의 순위는 {state.rank}등입니다!
      </Text1>
      <Text2>
        {state.my_name}님의 현재 점수는 {state.point}점입니다!
      </Text2>
      <ContainerBox>
        <Container>
          <MedalImg src="/images/1medal.svg" />
          <RankText>1위</RankText>
          <ScoreText>홍길동 - 1500점</ScoreText>
        </Container>
        <Container>
          <MedalImg src="/images/2medal.svg" />
          <RankText>2위</RankText>
          <ScoreText>우영우 - 1300점</ScoreText>
        </Container>
        <Container>
          <MedalImg src="/images/3medal.svg" />
          <RankText>3위</RankText>
          <ScoreText>구기준 - 1000점</ScoreText>
        </Container>
      </ContainerBox>
    </Body>
  );
};

export default Rank;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Img = styled.img`
  width: 250;
  height: 250px;
  margin-top: 100px;
`;

const MedalImg = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 30px;
`;

const Text1 = styled.div`
  margin-top: 46px;
  color: #000;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Text2 = styled.div`
  margin-top: 9px;
  color: #000;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ContainerBox = styled.div`
  margin-top: 47px;
  display: flex;
  :last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 60px;
`;

const RankText = styled.div`
  color: #000;
  font-size: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ScoreText = styled.div`
  color: #000;
  font-size: 48px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 17px;
`;
