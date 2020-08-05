import React from 'react';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo3.png';
import FooterBase from './styles';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img src={Logo} className="Logo" alt="GogFilms Logo" />
      </Link>
      <p style={{ fontSize: '18px' }}>
        Orgulhosamente desenvolvido durante a
        {' '}
        <a href="https://www.alura.com.br/imersao-react/">
          Imersão React da Alura
        </a>
      </p>
      <a href="https://github.com/gabriela-ogoncalves/gogfilms" target="_blank" rel="noopener noreferrer">
        <GitHub style={{ fontSize: 40, paddingRight: 10 }} />
      </a>
      <a href="https://www.linkedin.com/in/gabriela-ogoncalves/" target="_blank" rel="noopener noreferrer">
        <LinkedIn style={{ fontSize: 40 }} />
      </a>
    </FooterBase>
  );
}

export default Footer;
