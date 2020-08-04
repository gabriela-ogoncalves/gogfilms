import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

function Loading() {
  const Container = styled.div`
        height: 100%;
        display: flex;
        flex: 1;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        background: #141414;
    `;

  return (
    <Container>
      <ReactLoading type="spinningBubbles" color="var(--primary)" height="50px" width="50px" />
    </Container>
  );
}

export default Loading;
