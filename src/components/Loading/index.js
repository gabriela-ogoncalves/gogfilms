import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

function Loading() {
  const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--black);
    --bodyPaddingTop: 20px;
    min-height: calc(60vh);
    padding-top: 20vh;
    `;

  return (
    <Container>
      Carregando...
      <ReactLoading type="bubbles" color="var(--theme2)" height="100px" width="100px" />
    </Container>
  );
}

export default Loading;
