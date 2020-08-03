import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };
  const [categorias, setCategorias] = useState([]);
  const { valores, handleChange, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    // o que a gente quer que aconteça
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gogfilms.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, [
    // quando queremos que aconteça (opcional)
    // se array for vazio, vai acontecer apenas 1x no carregamento da página
  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={valores.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          value={valores.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={valores.cor}
          name="cor"
          onChange={handleChange}
        />
        <Button> Cadastrar </Button>
      </form>
      {categorias.length === 0
      && (
        <div>
          Loading...
          <ReactLoading type="spinningBubbles" color="var(--primary)" height="50px" width="50px" />
        </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
