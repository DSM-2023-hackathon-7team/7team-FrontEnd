import React from 'react';
import styled from "styled-components";
import Header from "../components/common/Header";

function Detail() {
    return <Body>
            <Header />
            <Section>
            <Wrapper>
                <Title>자전거를 어떻게 하면 안전하게 탈 수 있을까요?</Title>
                <Info>
                    <h1>2023-01-01</h1>
                    <div style={{display:"inline-flex", flexDirection:"row", alignItems:"center", gap:"3px"}}>
                        <img src="/images/heart.svg" alt="Likes"></img>
                        <h1>123</h1>
                    </div>
                </Info>
                <Data>
                    <img src="/images/bicycle.png"/>
                    <span style={{marginTop:"20px",color:"#000",fontSize:"18px",fontFamily:"Inter",fontStyle:"normal",fontWeight:"400", lineHeight:"32px"}}>
                        보호장비를 잘 장착하고 자전거에 탑승합니다.<br />
                        또한 인도가 아닌 차도에서 타세요.<br />
                        자전거도 이륜이기 때문이에요.<br />
                        <br />
                        지금까지 자전거 안전하게 타는 방법이었습니다.<br />
                    </span>
                </Data>
                <div style={{display:"flex", justifyContent:"center"}}>
                <Comment>
                    <h1>0개의 댓글</h1>
                    <form style={{marginTop:"20px"}}>
                        <CommentArea placeholder="댓글을 입력해주세요."></CommentArea>
                        <WriteButton>댓글 작성</WriteButton>
                    </form>
                </Comment>
                </div>
            </Wrapper>
            </Section>
        </Body>
}

export default Detail;

const Body = styled.div`
    overflow-x:hidden;
    margin-bottom:60px;
`;

const Section = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
`

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    display: flex;
    margin-top: 100px;
    color: #000;
    font-size: 32px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`;

const Info = styled.div`
    display: inline-flex;
    margin-top: 40px;
    gap: 30px;
`;

const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
`;

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 150px;
`;

const CommentArea = styled.textarea`
    display: flex;
    width: 1000px;
    height: 169px;
    padding: 16px 14px 121px 16px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #A7A7A7;
    background: #FDFDFD;
    resize: none;
    color: #777;
    font-size: 18px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
`;


const WriteButton = styled.button`
    padding: 3px 58px 3px 63px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 10px;
    background: #5AFF9C;
    color: #FFF;
    font-size: 20px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
    margin-Top: 20px;
    margin-left: 790px;
`;