import styled from "styled-components";
import Header from "../components/common/Header";

function Main() {
    return <Wrapper>
            <Header />
            <Top>
                <span>안전 사고 정보,<br /> 여기서 확인하세요</span>
                <img src="/images/Person.svg"/>
            </Top>
        </Wrapper>
}

const Wrapper = styled.div`
    overflow-x: hidden;
`;

const Top = styled.div`
    display: flex;
    justify-content: right;
`;

export default Main;