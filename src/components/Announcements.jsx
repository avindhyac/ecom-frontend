import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  background-color: indianred;
  color: whitesmoke;
  text-align: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return (
    <Container>
      {/* The marketing girl who works here is cute asf -- Stay tuned for more
			announcements 🤍 */}
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis officia
      veritatis eaque expedita quibusdam
    </Container>
  );
};

export default Announcements;
