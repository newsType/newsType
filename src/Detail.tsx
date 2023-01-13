import React from 'react';
import styled from 'styled-components';

let Outside = styled.div`
  background: #f2f3f4;
  width: 100%;
  height: 100%;
`;
let Container = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  background: white;
  position: relative;
  display: block;
`;

//! 왜 이미지에 width랑 height 둘 다 명시해야 하는지 모르겠음
let MainImg = styled.img`
  margin: 0 auto;
  width: 80%;
  height: 60%;
  background-image: url('picture/detailMain.png');
  margin-top: 100px;
  background-size: cover;
`;

const Detail = () => {
  return (
    <>
      <Outside>
        <Container>
          <MainImg />
        </Container>
      </Outside>
    </>
  );
};

export default Detail;
