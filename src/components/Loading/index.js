import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

function Loading() {
  const Container = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    z-index: 10;
    width: 100%;
    background-color: #000000e9;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const P = styled.p`
    font-size: 16px;
    font-weight: normal;
  `;

  return (
    <Container>
      <P>
        Carregando...
        <ReactLoading type="bubbles" color="var(--theme2)" height="100px" width="100px" />
      </P>
    </Container>
  );
}

export default Loading;
