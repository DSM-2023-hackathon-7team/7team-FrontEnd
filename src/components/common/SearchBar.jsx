import styled from "styled-components";
import { Clue } from "../../assets";

const SearchBar = ({ onChange, value }) => {
  return (
    <_Wrapper>
      <_Input
        type="text"
        placeholder="안전 정보를 입력해주세요."
        onChange={onChange}
        value={value}
      />
      <_Image src={Clue} alt="clue" />
    </_Wrapper>
  );
};

export default SearchBar;

const _Wrapper = styled.div`
  width: 323px;
  height: 39px;
  display: flex;
  padding: 5px 20px;
  border-radius: 30px;
  background-color: #f8f8f8;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
`;

const _Image = styled.img`
  cursor: pointer;
`

const _Input = styled.input`
  width: 80%;
  height: 100%;
  ::placeholder {
    color: #b4b0b0;
  }
`;
