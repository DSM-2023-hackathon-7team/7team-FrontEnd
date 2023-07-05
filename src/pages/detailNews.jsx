import { styled } from "styled-components";
import Header from "../components/common/Header";
import { convertDateFormat } from "../utils/function/date";

const DetailNews = () => {
  return (
    <_Item>
      <Header />
      <_Wrapper>
        <_Title>{localStorage.getItem("title")}</_Title>
        <_Date>{convertDateFormat(localStorage.getItem("date"))}</_Date>
        <_Image
          src={localStorage.getItem("imageUrl")}
          alt={localStorage.getItem("title")}
        />
        <_ContentsWrapper>
          {localStorage
            .getItem("describe")
            .split("\n")
            .map((line, idx) => {
              return (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              );
            })}
        </_ContentsWrapper>
      </_Wrapper>
    </_Item>
  );
};

export default DetailNews;

const _Item = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
