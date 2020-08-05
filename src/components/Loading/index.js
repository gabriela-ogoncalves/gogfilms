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
      <ReactLoading type="spinningBubbles" color="var(--primary)" height="50px" width="50px" />
    </Container>
  );
}

export default Loading;
