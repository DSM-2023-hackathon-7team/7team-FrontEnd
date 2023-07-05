import { styled } from "styled-components";
import Header from "../components/common/Header";
import { convertDateFormat } from "../utils/function/date";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsPost } from "../apis/getNewsPost";
import { customToast } from "../utils/toast/toast";

const DetailNews = () => {
  const [information, setInformation] = useState({
    date: "",
    describe: "",
    image_url: "",
    title: "",
  });
  const params = useParams();

  useEffect(() => {
    const { id } = params;
    getNewsPost(id)
      .then(({ data }) => {
        setInformation(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 에러", "error");
      });
  }, []);

  return (
    <Body>
    <_Item>
      <Header />
      <_Wrapper>
        <_Title>{information.title}</_Title>
        <_Date>{convertDateFormat(information.date)}</_Date>
        <_Image src={information.image_url} alt={information.title} />
        <_ContentsWrapper>
          {information.describe.split("\n").map((line, idx) => {
            return (
              <span key={idx} style={{lineHeight:"40px"}}>
                {line}
                <br />
              </span>
            );
          })}
        </_ContentsWrapper>
      </_Wrapper>
    </_Item>
    </Body>
  );
};

export default DetailNews;

const Body = styled.div`
  overflow-x: hidden;
`;

const _Item = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _Wrapper = styled.section`
  padding: 120px 460px;
  display: flex;
  flex-direction: column;
`;

const _Title = styled.span`
  font-size: 32px;
  color: #000;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 50px;
`;

const _Date = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 50px;
`;

const _Image = styled.img`
  width: 1000px;
  height: 500px;
  flex-shrink: 0;
  margin-bottom: 40px;
`;

const _ContentsWrapper = styled.div`
  width: 1000px;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 100px;
`;
