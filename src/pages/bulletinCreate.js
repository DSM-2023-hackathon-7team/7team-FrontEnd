import { useState, useRef, useMemo } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { FindImage } from "../assets";
import TextField from "../components/common/TextField";
import { imageUpload } from "../apis/imageUpload";
import { customToast } from "../utils/toast/toast";
import { createAccidentPost } from "../apis/createAccidentPost";

function BulletinCreate() {
  const [information, setInformation] = useState({
    title: "",
    content: "",
    image_url: "",
  });
  const [imageState, setImageState] = useState("");
  const ref = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInformation({
      ...information,
      [name]: value,
    });
  };

  const imageOnChange = (e) => {
    const fileList = e.target.files;
    const { name } = e.target;
    const formData = new FormData();

    if (fileList && fileList[0]) {
      formData.append("image", fileList[0]);
      imageUpload(formData)
        .then(({ data }) => {
          setImageState(data.image_url);
          setInformation({ ...information, [name]: data.image_url });
        })
        .catch((err) => {
          customToast("이미지 업로드에 실패했습니다.", "error");
          console.error(err);
        });
    }
  };

  const showImage = useMemo(() => {
    if (!imageState) {
      return (
        <>
          <img src={FindImage} alt="FindImage" />
          <_Text>이미지를 선택하세요</_Text>
        </>
      );
    }
    return <_Image src={imageState} height={200} alt="" />;
  }, [imageState]);

  const onClick = () => {
    //게시물 생성 api
    createAccidentPost(information)
      .then((res) => {
        console.log(res);
        window.location.href = "/bulletin";
      })
      .catch((err) => {
        console.error(err);
        customToast("개발자 에러", "error");
      });
  };

  return (
    <Body>
      <Header />
      <Wrapper>
        <CreateTitle>사고 게시글 작성</CreateTitle>
        <div>
          <TextField
            width={100}
            name="title"
            placeholder="제목을 입력하세요."
            value={information.title}
            onChange={onChange}
          />
          <TextInput
            name="content"
            value={information.content}
            onChange={onChange}
            placeholder="값을 입력해주세요"
          />
          <_SelectImageWrapper
            height={200}
            onClick={() => ref.current?.click()}
          >
            {showImage}
            <_FileSelector
              ref={ref}
              type="file"
              accept="image/*"
              onChange={imageOnChange}
              name="image_url"
            />
          </_SelectImageWrapper>
          <EndButton onClick={onClick}>게시글 작성하기</EndButton>
        </div>
      </Wrapper>
    </Body>
  );
}

export default BulletinCreate;

const Body = styled.div`
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateTitle = styled.h1`
  color: #000;
  margin-top: 80px;
  margin-left: -932px;
  font-size: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const EndButton = styled.button`
  margin-top: 50px;
  padding: 3px 63px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #5aff9c;
  color: #fff;
  font-size: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  cursor: pointer;
  margin-bottom: 100px;
`;

const TextInput = styled.textarea`
  display: flex;
  margin-top: 35px;
  width: 1180px;
  height: 400px;
  resize: none;
  padding: 21px 0 340px 27px;
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

const _FileSelector = styled.input`
  width: 340px;
  height: 200px;
  display: none;
`;

const _SelectImageWrapper = styled.form`
  width: 340px;
  height: ${({ height = 200 }) => `${height}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #d3d3d3;
  cursor: pointer;
  margin-top: 50px;
`;

const _Text = styled.p`
  margin-top: 10px;
  color: #d3d3d3;
  font-weight: 400;
  font-size: 16px;
`;

const _Image = styled.img`
  width: 340px;
  height: ${({ height }) => `${height}px`};
`;
