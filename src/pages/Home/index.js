import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import { SContainer } from "./styles";

function Home() {
  return (
    <div className="App" style={{ background:"#141414" }}>
      <SContainer>
        <Menu />
        <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="Abaixo selecionei algumas dicas de como passar o tempo nessa quarentena. As melhores séries de comédia, alguns filmes, trabalhos manuais, além de tutoriais de meditação e yoga para relaxar"
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
        
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        />
        <Footer />
      </SContainer>
    </div>
  );
}

export default Home;
