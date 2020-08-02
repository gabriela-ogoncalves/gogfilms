import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  // dá submit no form e limpa os dados com os valores iniciais
  function handleSubmit(infoDoEvento) {
    infoDoEvento.preventDefault();
    setCategorias([
      ...categorias,
      valores,
    ]);
    setValores(valoresIniciais);
  }

  // setando os valores (obs: chave = nome, descricao, cor etc)
  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor, // ex -> nome: 'valor'
    });
  }

  // mudando os valores dos campos através do setValor
  function handleChange(infoDoEvento) {
    setValor(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value,
    );
  }

  useEffect(() => {
    // o que a gente quer que aconteça
    console.log('alo alo');
    const URL = 'http://localhost:8080/categorias';
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
    valores.nome,
  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          value={valores.nome}
          name="nome"
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
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">
        Cadastro de Video
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
