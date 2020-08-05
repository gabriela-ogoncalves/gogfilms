import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import Erro from '../../assets/img/notFound.png';
import './style.css';

function NotFound() {
  const Container = styled.div`
        margin-left: 5%;
        margin-right: 5%;
        height: 100%;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;

  const Button = styled.button`
        margin: 50px;
        color: var(--white);
        border: 1px solid var(--white);
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 24px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        outline: none;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        transition: opacity .3s;

        &:hover,
        &:focus {
            opacity: .5;
        }
    `;

  return (
    <PageDefault>
      <Container>
        <h1>Página não encontrada!</h1>
        <a href="/">
          <img src={Erro} className="img" alt="Página não encontrada" />
        </a>
        <Button as={Link} to="/">
          Voltar para Home
        </Button>
      </Container>
    </PageDefault>
  );
}

export default NotFound;
