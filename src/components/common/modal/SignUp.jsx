import { styled } from "styled-components";
import TextField from "../TextField";
import { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { customToast } from "../../../utils/toast/toast";

const SignUp = () => {
  const [information, setInformation] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { closeModal } = useModal("Auth");

  const onChange = (e) => {
    const { value, name } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const onClick = () => {
    const regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );

    if (!regex.test(information.email)) {
      customToast("이메일 형식이 올바르지 않습니다.", "error");
      return;
    }

    if (information.name === "" || information.password === "") {
      customToast("모든 정보를 입력해주세요.", "error");
      return;
    }
    // 회원가입 api
  };

  return (
    <>
      <_Title>회원가입</_Title>
      <TextField
        width={400}
        placeholder="이름을 입력해주세요."
        name="name"
        onChange={onChange}
        value={information.name}
        text="이름"
      />
      <TextField
        width={400}
        placeholder="이메일을 입력해주세요."
        name="email"
        onChange={onChange}
        value={information.email}
        text="이메일"
      />
      <TextField
        width={400}
        placeholder="비밀번호를 입력해주세요."
        name="password"
        onChange={onChange}
        value={information.password}
        text="비밀번호"
        type="password"
      />
      <_FlexEnd>
        <_Button onClick={onClick}>회원가입</_Button>
      </_FlexEnd>
    </>
  );
};

export default SignUp;

const _Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 49px;
  color: black;
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
