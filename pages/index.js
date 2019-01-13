import styled from "styled-components";
import Header from "../components/Header";

const Home = styled.div`
    background-image: url('/static/images/back_trip.jpg');
    background-size: cover;
    background-position: center;
    position:absolute;
    top:0;
    left:0;
    z-index:-100;
    width:100%;
    height:100%;
    overflow:hidden;
`;
const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index:100;
    overflow:d hidden;
        color:#ffffff;
`;
const ContentWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction:row;
`;
const TitlePicWrapper = styled.div`
    margin-left:15%;
    width:55%;
    display:flex;
    flex-direction:column;
`;
const TitleWrapper = styled.div`
    width : 100%;
    display:flex;
    margin-top:32%;
`;
const TitleBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;
const SubTitle = styled.div`
width:70%;
    font-size:1.5rem; 
    font-weight:lighter
`;
const Title = styled.div`
width:100%;
  font-weight:bolder;
  font-size:3.5rem;  
`;
const PicPreviewWrapper = styled.div`
    width:100%;
    display:flex;
    margin-top:28%;
`;
const PicPreviewBox = styled.div`
    width:100px;
    height:100px;
    background-color:skyblue;
`;
const ModalWrapper = styled.div`
    width : 45%;
    display:flex;
    margin-top:7%;
`;
const ModalBox = styled.div`
    opacity:.6
  width: 450px;
  height: 600px;
  background-color: #000000;
  align-items:center;
  justify-content:center;
      z-index:100;

`;
const ModalHeader = styled.div`
    width:100%;
    margin-top:20%;
`;
const ModalHeaderTitle = styled.h1`
    font-size:1.2rem;
    text-align:center;`
;
const ModalContent = styled.div`
    width:100%;
    text-align:center;
    margin-top:17%;
`;
const ModalContentTitle = styled.h1`
    font-size:1rem;
    text-align:center;
    font-weight:lighter;

`;
const ModalFooter = styled.div`
    width:100%;
    margin-top:15%;
`;
const InfoWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
`;
const PersonInfo = styled.div`
    width:50%;
`;
const InfoTitle = styled.h2`
    font-size:1rem;
    text-align:center;
    font-weight:lighter;

`;
const InfoContent = styled.h2`
    font-size:2rem;
    text-align:center;
    font-weight:lighter;
`;
const PayInfo = styled.div`
    width:50%;
`;
const ButtonWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:5%;
`;
const InquiryBtn = styled.button`
  width: 120px;
  height: 33px;
  border-radius: 5px;
  background-color: transparent;
  font-size:1rem;
  font-weight:lighter;
  margin-right:5%;
  color:#ffffff;
`;
const ApplyBtn = styled.button`
  width: 120px;
  height: 33px;
  border-radius: 5px;
  background-color: #ffffff;
  font-size:1rem;
  color:#000000;
  font-weight:#000000;
`;
export default () => (
    <HomeWrapper>
        <Home />
        <Header/>
        <ContentWrapper>
            <TitlePicWrapper>
                <TitleWrapper>
                    <TitleBox>
                        <SubTitle>고등학생들만의 해커톤,</SubTitle>
                        <Title>HIGHTHON</Title>
                    </TitleBox>
                </TitleWrapper>
                <PicPreviewWrapper>
                    <PicPreviewBox>

                    </PicPreviewBox>
                </PicPreviewWrapper>
            </TitlePicWrapper>
            <ModalWrapper>
                <ModalBox>
                    <ModalHeader>
                        <ModalHeaderTitle>제5회 HIGHTHON:TRIP</ModalHeaderTitle>
                    </ModalHeader>
                    <ModalContent>
                        <ModalContentTitle>
                            올해 겨울,<br/>
                            다함께 하이톤으로<br/>
                            TRIP을 떠나볼까요?
                        </ModalContentTitle>
                    </ModalContent>
                    <ModalFooter>
                        <InfoWrapper>
                            <PersonInfo>
                                <InfoTitle>참가인원</InfoTitle>
                                <InfoContent>80명</InfoContent>
                            </PersonInfo>
                            <PayInfo>
                                <InfoTitle>참가</InfoTitle>
                                <InfoContent>5,000원</InfoContent>
                            </PayInfo>
                        </InfoWrapper>
                        <ButtonWrapper>
                            <InquiryBtn>신청조회</InquiryBtn>
                            <ApplyBtn>신청하기</ApplyBtn>
                        </ButtonWrapper>
                    </ModalFooter>
                </ModalBox>
            </ModalWrapper>
        </ContentWrapper>
    </HomeWrapper>

);