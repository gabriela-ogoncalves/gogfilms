import React, { useEffect, useState } from 'react';
// import ReactLoading from 'react-loading';
// import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import SContainer from './styles';
import Loading from '../../components/Loading';
import bannerImg from '../../assets/img/pf.png';
import './style.css';

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
          <Loading />
        )}

        <div className="banner-main">
          <section>
            <p>
              Quer abstrair toda tensão do momento atual e rir um bocado?
            </p>
            <i>
              Abaixo selecionei algumas dicas de como passar o tempo nessa quarentena.
              As melhores séries de comédia, alguns filmes, trabalhos manuais,
              além de tutoriais de meditação e yoga para relaxar.
            </i>
          </section>
          <section>
            <img src={bannerImg} alt="" />
          </section>
        </div>

        {dadosIniciais.map((categoria) => (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        ))}

      </PageDefault>
    </SContainer>
  );
}

export default Home;
