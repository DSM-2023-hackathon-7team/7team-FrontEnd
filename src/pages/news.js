import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { getNews } from "../apis/getNews";
import { customToast } from "../utils/toast/toast";
import { useNavigate } from "react-router-dom";
import { convertDateFormat } from "../utils/function/date";

const News = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onClick = (idx) => {
    navigate(`/news/${idx}`);
  };

  const loadNews = () => {
    setIsLoading(true);
    getNews(pageNumber)
      .then((res) => {
        const newNewsItems = res.data;
        console.log(newNewsItems);
        setNewsItems((prevNewsItems) => [...prevNewsItems, ...newNewsItems]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 에러", "error");
        setIsLoading(false);
      });
  };

  const handleScroll = () => {
    const height = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;
    const option = height + scrollTop;

    if (option === offsetHeight && !isLoading) {
      loadNews();
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Body>
      <Header />
      <MainText>안전 뉴스</MainText>
      <ContainerBox>
        {newsItems?.map((element) => {
          return (
            <Container onClick={() => onClick(element.id)} key={element.id}>
              <Img src={element.image_url} alt={element.title} />
              <TextSection>
                <Title>{element.title}</Title>
                <Content>{element.describe}</Content>
              </TextSection>
              <YMD>{convertDateFormat(element.date)}</YMD>
            </Container>
          );
        })}
        {isLoading && <span>Loading...</span>}
      </ContainerBox>
    </Body>
  );
};

export default News;

const Body = styled.div`
  overflow-x: hidden;
`;

const MainText = styled.div`
  height: 70px;
  color: #000;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-top: 130px;
  margin-left: 370px;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const Container = styled.div`
  width: 1600px;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 60px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

const Container2 = styled.a`
  width: 83.5vw;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 60px;
  display: flex;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 75px;
  margin-left: 50px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 70px;
  height: 250px;
  width: 800px;
  overflow-y: hidden;
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
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 20px;
  text-overflow: ellipsis;
`;

const YMD = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-left: 250px;
  margin-top: 184px;
`;
