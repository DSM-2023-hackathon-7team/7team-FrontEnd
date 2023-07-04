import { useState } from "react";
import styled from "styled-components";
import TextField from "../TextField";

const Login = ({ setIsSignUp }) => {
  const [information, setInformation] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const onClickSignUp = () => {
    setIsSignUp(true);
  };

  const onClick = () => {
    // api 요청
  };

  return (
    <>
      <_Title>로그인</_Title>
      <TextField
        width={400}
        placeholder="이메일을 입력해주세요."
        value={information.email}
        onChange={onChange}
        name="email"
        text="이메일"
      />
      <TextField
        width={400}
        placeholder="비밀번호를 입력해주세요."
        value={information.password}
        onChange={onChange}
        name="password"
        text="비밀번호"
        type="password"
      />
      <_SignUpChangeText>
        아직 회원이 아니신가요?{" "}
        <_SignUpText onClick={onClickSignUp}>회원가입</_SignUpText>
      </_SignUpChangeText>
      <_FlexEnd>
        <_Button onClick={onClick}>로그인</_Button>
      </_FlexEnd>
    </>
  );
};

export default Login;

const _Title = styled.h1`
  line-height: 32px;
  font-size: 32px;
  color: black;
  font-weight: 700;
`;

const _SignUpChangeText = styled.span`
  width: 60%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: #929292;
`;

const _SignUpText = styled(_SignUpChangeText)`
  color: #404040;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const _FlexEnd = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
`;

const _Button = styled.button`
  border-radius: 10px;
  background: #5aff9c;
  display: inline-flex;
  padding: 3px 22px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  cursor: pointer;
`;
