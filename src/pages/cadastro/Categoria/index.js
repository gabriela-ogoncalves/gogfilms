import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    }
  const [categorias, setCategorias] = useState([])
  const [valores, setValores] = useState(valoresIniciais)


    // dá submit no form e limpa os dados com os valores iniciais 
    function handleSubmit(infoDoEvento) {
      infoDoEvento.preventDefault();
      setCategorias([
        ...categorias,
        valores
      ]);
      setValores(valoresIniciais)
    }

    // setando os valores (obs: chave = nome, descricao, cor etc)
    function setValor(chave, valor) { 
      setValores({
        ...valores,
        [chave]: valor // ex -> nome: 'valor'
      })
    }

    // mudando os valores dos campos através do setValor
    function handleChange(infoDoEvento) {
      setValor(
        infoDoEvento.target.getAttribute("name"), 
        infoDoEvento.target.value
      )
    }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {valores.nome} </h1>

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
            type=""
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
          <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map((categorias, indice) => {
            return(
              <li key={`${categorias}${indice}`}>
                {categorias.nome}
              </li>
            );
          })}
        </ul>

        <Link to="/cadastro/video">
            Cadastro de Video
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;
