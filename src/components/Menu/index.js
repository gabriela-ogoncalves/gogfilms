import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="GogFilms Logo" />
      </Link>
      <div className="MenuOptions">
        <Button as={Link} className="ButtonLink" to="/">
          Home
        </Button>
        <div className="dropdown">
          <button className="dropbtn" type="button">Categorias</button>
          <div className="dropdown-content">
            <Link to="/cadastro/categoria"> Nova categoria </Link>
            <Link to="/cadastro/"> Editar categoria </Link>
            <Link to="/cadastro/"> Remover categoria </Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn" type="button">Vídeo</button>
          <div className="dropdown-content">
            <Link to="/cadastro/video"> Novo vídeo </Link>
            <Link to="/cadastro/"> Editar vídeo </Link>
            <Link to="/cadastro/"> Remover vídeo </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
