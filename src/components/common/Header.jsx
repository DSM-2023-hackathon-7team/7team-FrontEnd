import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Profile } from "../../assets";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [name, setName] = useState("");

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    setIsLogin(accessToken ? true : false);

    if (isLogin) {
      // 이름 요청
    }
  }, []);

  return (
    <_Wrapper>
      <span>Logo</span>
      <_RightWrapper>
        <SearchBar onChange={onChange} value={searchValue} />
        <_HeaderNav>안전 퀴즈</_HeaderNav>
        <_HeaderNav>안전 사고</_HeaderNav>
        <_HeaderNav>안전 뉴스</_HeaderNav>
        <_HeaderNav>사고 게시판</_HeaderNav>
        {isLogin ? (
          <_ProfileWrapper>
            <_Image src={Profile} alt="profile" />
            <_Name>Test</_Name>
          </_ProfileWrapper>
        ) : (
          <_LoginButton>로그인</_LoginButton>
        )}
      </_RightWrapper>
    </_Wrapper>
  );
};

export default Header;

const _Wrapper = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  padding: 13px 80px;
  align-items: center;
  justify-content: space-between;
`;

const _RightWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;

const _HeaderNav = styled(Link)`
  font-size: 20px;
  color: #000000;
  font-weight: 400;
  line-height: 32px;
  text-decoration: none;
  margin-right: 30px;
  display: flex;
  align-items: center;
`;

const _LoginButton = styled.button`
  padding: 0 22px;
  border-radius: 10px;
  background: #5aff9c;
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 39px;
`;

const _Image = styled.img`
  width: 30px;
  height: 30px;
`;

const _ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _Name = styled.span`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
