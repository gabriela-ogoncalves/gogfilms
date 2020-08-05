import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import Container from '../style';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  const categoryTitles = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <Container>
        <h1>Cadastro de Vídeo</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          const categoriaEscolhida = categorias
            .find((categoria) => categoria.titulo === valores.categoria);
          videosRepository.create({
            titulo: valores.titulo,
            url: valores.url,
            categoriaId: categoriaEscolhida,
          })
            .then(() => {
              // eslint-disable-next-line no-console
              console.log('Cadastrou com sucesso');
              history.push('/');
            });
        }}
        >
          <FormField
            label="Título do Vídeo"
            type="text"
            value={valores.titulo}
            name="titulo"
            onChange={handleChange}
          />

          <FormField
            label="URL"
            type="url"
            value={valores.url}
            name="url"
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            type="categoria"
            value={valores.categoria}
            name="categoria"
            onChange={handleChange}
            suggestions={categoryTitles}
          />
        </form>
        <Button> Cadastrar </Button>
      </Container>
    </PageDefault>
  );
}

export default CadastroVideo;
