import styled from "styled-components";
import { Profile } from "../../assets";
import { Heart } from "../../assets/image/svgs/Heart";

const TipsList = ({ hearts, title, data }) => {
  return (
    <_Wrapper>
      <_Image src={Profile} alt="post picture" />
      <_SmallWrapper>
        <_Title>{title}</_Title>
        <_Items>
          <span>{data}</span>
          <_HeartWrapper>
            <Heart />
            <span>{hearts}</span>
          </_HeartWrapper>
        </_Items>
      </_SmallWrapper>
    </_Wrapper>
  );
};

export default TipsList;

const _Wrapper = styled.div`
  width: 1180px;
  height: 150px;
  background-color: #fdfdfd;
  padding: 15px 60px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const _Image = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 40px;
`;

const _HeartWrapper = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Title = styled.h2`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

const _SmallWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const _Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
