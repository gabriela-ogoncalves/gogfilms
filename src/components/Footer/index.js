import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import FooterBase from './styles';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img src={Logo} className="Logo" alt="GogFilms Logo" />
      </Link>
      <p>
        Website feito com ReactJS por
        {' '}
        <a href="https://www.linkedin.com/in/gabriela-ogoncalves">
          <b>Gabriela Gonçalves</b>
        </a>
      </p>
      <p>
        Acessando o
        {' '}
        <a href="https://www.github.com/gabriela-ogoncalves/gogfilms">
          repositório
        </a>
        {' '}
        você pode verificar como foi feito.
      </p>
      <p>
        Orgulhosamente desenvolvido durante a
        {' '}
        <a href="https://www.alura.com.br/imersao-react/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
