import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { getDetailAccident } from "../apis/getDetailAccident";
import { useParams } from "react-router-dom";
import { customToast } from "../utils/toast/toast";
import { Heart } from "../assets/image/svgs/Heart";
import { likeApi } from "../apis/like";
import { createInfoListComment } from "../apis/createInfolistComment";
import { getInfoListComment } from "../apis/getInfoListComment";

const Detail = () => {
  const { id } = useParams();
  const [information, setInformation] = useState({
    content: "",
    created_at: "",
    image_url: "",
    likes_count: 0,
    title: "",
  });
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState("");
  const [comment, setComment] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const createCommentOnClick = () => {
    createInfoListComment(id, value)
      .then((res) => {
        console.log(res);
        customToast("댓글이 작성되었습니다.", "success");
        setValue("");
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 에러", "error");
      });
  };

  const changeDate = (date) => {
    const str = [];

    for (let i = 0; i < 10; i++) {
      str.push(date[i]);
    }

    return str.join("");
  };

  const onClick = () => {
    likeApi(id)
      .then((res) => {
        console.log(res);
        setStatus(!status);
      })
      .catch((err) => {
        console.error(err);
        customToast("Error", "error");
      });
  };

  useEffect(() => {
    getDetailAccident(id)
      .then((res) => {
        console.log(res.data);
        setInformation(res.data);
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 에러", "error");
      });
  }, []);

  useEffect(() => {
    getInfoListComment(id).then((res) => {
      console.log(res.data);
      setComment(res.data.comments);
    });
  }, [value]);

  return (
    <Body>
      <Header />
      <Section>
        <Wrapper>
          <Title>{information.title}</Title>
          <Info>
            <h1>{changeDate(information.created_at)}</h1>
            <div
              style={{
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <Heart
                status={status}
                color={status ? "#5aff9c" : "#000000"}
                onClick={onClick}
              />
            </div>
          </Info>
          <Data>
            <img src={information.image_url} alt={information.title} />
            <span
              style={{
                marginTop: "20px",
                color: "#000",
                fontSize: "18px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "32px",
              }}
            >
              {information.content.split("\n").map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </span>
          </Data>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Comment>
              <h1>{comment.length}개의 댓글</h1>
              <div style={{ marginTop: "20px" }}>
                <CommentArea
                  placeholder="댓글을 입력해주세요."
                  value={value}
                  onChange={onChange}
                />
                <WriteButton onClick={createCommentOnClick}>
                  댓글 작성
                </WriteButton>
              </div>
            </Comment>
          </div>
        </Wrapper>
        <_CommentItem>
          {comment?.map((item, index) => {
            return (
              <_CommentWrapper key={index}>
                <_Name>{item.name}</_Name>
                <span>{item.content}</span>
              </_CommentWrapper>
            );
          })}
        </_CommentItem>
      </Section>
    </Body>
  );
};

export default Detail;

const Body = styled.div`
  overflow-x: hidden;
  margin-bottom: 60px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1000px;
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
  width: 1000px;
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
  border: 1px solid #a7a7a7;
  background: #fdfdfd;
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
  background: #5aff9c;
  color: #fff;
  font-size: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  margin-top: 20px;
  margin-left: 790px;
  margin-bottom: 30px;
`;

const _CommentItem = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
`;

const _CommentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _Name = styled.span`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-right: 20px;
`;
