import styled from "styled-components";

const TipsList = ({hearts, title, data}) => {
    return (
        <Wrapper>
            <Icon/>
            <div>
            <Texts>
                <Title>{title}</Title>
               
            </Texts>
<Text>
<Data>{data}</Data>
                <img src="/images/heart.svg" alt="Likes"></img>
                <h1>{hearts}</h1>

</Text>
            </div>
        </Wrapper>
    )
}

export default TipsList;

const Wrapper = styled.div`
    display: flex;
    justify-items: center;
    flex-direction: row; 
    align-items: center;
    width: 1180px;
    height: 150px;
    flex-shrink: 0;
    background: #FDFDFD;
`;

const Text = styled.div`
    width: 100%;
    display: flex;
`

const Texts = styled.div`
    margin-left: 30px;
`;

const Likes = styled.div`
    display: inline-flex;
    align-items: center;
    margin-top: 90px;
    gap: 5px;
`;

const Icon = styled.div`
    display: block;
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 5px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const Title = styled.h1`
    color: #000;
    font-size: 24px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
`;

const Data = styled.h1`
    color: #000;
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
`;