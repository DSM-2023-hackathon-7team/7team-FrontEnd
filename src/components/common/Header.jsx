import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Profile } from "../../assets";
import { useModal } from "../../hooks/useModal";
import LoginModal from "./modal/LoginModal";
import { getRank } from "../../apis/getRank";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const { modal, openModal } = useModal("Auth");

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    setIsLogin(accessToken ? true : false);

    if (accessToken) {
      // 이름 요청
      getRank()
        .then(({ data }) => {
          setName(data.my_name);
        })
        .catch((err) => {
          console.error(err);
          setName("");
        });
    }
  }, []);

  return (
    <>
      {modal.isOpen && <LoginModal />}
      <_Wrapper>
        <Link to="/">
          <img src="/images/logo2.png" style={{ width: "70px" }} />
        </Link>
        <_RightWrapper>
          <_HeaderNav to="/quiz">안전 퀴즈</_HeaderNav>
          <_HeaderNav to="/infolist">안전 꿀팁</_HeaderNav>
          <_HeaderNav to="/news">안전 뉴스</_HeaderNav>
          <_HeaderNav to="/bulletin">사고 게시판</_HeaderNav>
          {isLogin ? (
            <_ProfileWrapper>
              <_Image src={Profile} alt="profile" />
              <_Name>{name}</_Name>
            </_ProfileWrapper>
          ) : (
            <_LoginButton onClick={openModal}>로그인</_LoginButton>
          )}
        </_RightWrapper>
      </_Wrapper>
    </>
  );
};

export default Header;

const _Wrapper = styled.header`
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
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
  cursor: pointer;
  align-items: center;
  opacity: 50%;
  transition: 0.3s;
  &:hover {
    opacity: 100%;
  }
`;

const _LoginButton = styled.button`
  padding: 0 22px;
  border-radius: 10px;
  background: #5aff9c;
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 39px;
  cursor: pointer;
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
