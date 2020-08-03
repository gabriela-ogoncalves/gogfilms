import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import SContainer from './styles';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Err: ', err.message);
      });
  }, []);

  return (
    <SContainer>
      <PageDefault paddingAll={0}>
        { dadosIniciais.length === 0 && (
        <div>
          Loading...
          <ReactLoading type="spinningBubbles" color="var(--primary)" height="50px" width="50px" />
        </div>
        )}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription="Abaixo selecionei algumas dicas de como passar o tempo nessa quarentena. As melhores séries de comédia, alguns filmes, trabalhos manuais, além de tutoriais de meditação e yoga para relaxar"
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}
      </PageDefault>
    </SContainer>
  );
}

export default Home;
