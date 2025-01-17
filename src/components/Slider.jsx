import styled from "styled-components";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #cd5c5c;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  width: 80%;
`;

const Slider = () => {
  return (
    <div>
      <Container>
        <Arrow direction="left">
          <ArrowBackIosOutlined />
        </Arrow>
        <Wrapper>
          <Slide>
            <ImgContainer>
              <Image src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg" />
            </ImgContainer>
            <InfoContainer>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex
                culpa porro ab ipsum fugiat quasi vero vel eaque officiis
                minima, mollitia quae atque accusamus explicabo dolorem.
              </div>
            </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right">
          <ArrowForwardIosOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
