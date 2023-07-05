import { useState } from "react";
import styled from "styled-components";
import TextField from "../TextField";
import { SignIn } from "../../../apis/SignIn";
import { customToast } from "../../../utils/toast/toast";

const Login = ({ setIsSignUp }) => {
  const [information, setInformation] = useState({
    account_id: "",
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
    SignIn(information)
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 문제", "error");
      });
  };

  return (
    <>
      <_Title>로그인</_Title>
      <TextField
        width={400}
        placeholder="이메일을 입력해주세요."
        value={information.account_id}
        onChange={onChange}
        name="account_id"
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
