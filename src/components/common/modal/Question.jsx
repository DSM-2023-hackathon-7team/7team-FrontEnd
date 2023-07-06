import { styled } from "styled-components";
import { useState } from "react";
import { gptDummyData } from "../../../utils/constants/gptData";
import { customToast } from "../../../utils/toast/toast";
import TextField from "../TextField";
import { AnswerData } from "../../../utils/constants/answer";
import { createQuiz } from "../../../apis/createQuiz";
import { useModal } from "../../../hooks/useModal";

const Question = () => {
  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState({
    ask: "",
    answer: "O",
  });
  const { closeModal } = useModal("Question");

  const onChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const checkBoxOnChange = (e) => {
    const { name } = e.target;
    setQuestion({ ...question, answer: name });
  };

  const plusOnClick = () => {
    if (number === 20) {
      customToast("다시 시도해주세요", "error");
      return;
    }
    setNumber(number + 1);
  };

  const minusOnClick = () => {
    if (number === 1) {
      customToast("다시 시도해주세요", "error");
      return;
    }
    setNumber(number - 1);
  };

  const onClick = () => {
    if (!question) {
      // 값이 비어있으면
      customToast("값을 다시 확인해주세요.", "error");
      return;
    }

    // api연결
    createQuiz({
      question: question.ask,
      result: question.answer === "O" ? true : false,
    })
      .then((res) => {
        console.log(res);
        closeModal();
        window.location.href = "/infolist";
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 에러", "error");
      });
  };

  return (
    <_Wrapper>
      <_GptDataTitle>GPT 추천 문제</_GptDataTitle>
      <_GptDataWrapper>
        <span>{gptDummyData[number - 1].contents}</span>
        <span>정답: {gptDummyData[number - 1].answer}</span>
        <_SmallWrapper>
          <_PolygonLeft onClick={minusOnClick} />
          <_Pages>{number} / {gptDummyData.length}</_Pages>
          <_PolygonRight onClick={plusOnClick} />
        </_SmallWrapper>
      </_GptDataWrapper>
      <TextField
        name="ask"
        value={question.ask}
        onChange={onChange}
        placeholder="문제를 입력해주세요."
        width={900}
        text="문제"
      />
      <_OptionWrapper>
        <span>문제 정답</span>
        {AnswerData.map((item) => {
          return (
            <_AnswerWrapper key={item.id}>
              <_CheckBox
                checked={question.answer === item.answer}
                onChange={checkBoxOnChange}
                type="radio"
                name={item.answer}
                id="check"
              />
              <_Label>{item.answer}</_Label>
            </_AnswerWrapper>
          );
        })}
      </_OptionWrapper>
      <_FlexEnd>
        <_Button onClick={onClick}>출제하기</_Button>
      </_FlexEnd>
    </_Wrapper>
  );
};

export default Question;

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _AnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
`;

const _Label = styled.label`
  font-weight: 400;
  font-size: 17px;
  line-height: 15px;
`;

const _GptDataWrapper = styled.div`
  width: 900px;
  height: 200px;
  padding: 40px 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const _GptDataTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
`;

const _PolygonLeft = styled.div`
  width: 30px;
  height: 30px;
  transform: rotate(-90deg);
  flex-shrink: 0;
  cursor: pointer;
  background-color: #5aff9c;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const _PolygonRight = styled(_PolygonLeft)`
  transform: rotate(-90deg);
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
`;

const _SmallWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _Pages = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const _TextInput = styled.textarea`
  display: flex;
  margin-top: 35px;
  width: 900px;
  height: 200px;
  resize: none;
  padding: 21px 0 21px 27px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  color: black;
  border: 1px solid var(--gray-gray-500, #a7a7a7);
  background: var(--system-background, #f6f6f6);
  font-size: 18px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  ::placeholder {
    color: var(--gray-gray-500, #a7a7a7);
  }
`;

const _OptionWrapper = styled.div`
  margin-top: 70px;
  width: 900px;
  display: flex;
  align-items: center;
`;

const _FlexEnd = styled.div`
  width: 900px;
  display: flex;
  justify-content: flex-end;
  margin-top: 75px;
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

const _CheckBox = styled.input`
  accent-color: #5aff9c;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #d9d9d9;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 5px;
  &:checked {
    background-color: #5aff9c;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    background-color: #b3f7cc;
  }
`;
