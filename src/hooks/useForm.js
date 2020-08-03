import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  // limpa os dados do form com os valores iniciais
  function clearForm() {
    console.log('entrou no clear form');
    setValores(valoresIniciais);
  }

  // setando os valores (obs: chave = titulo, descricao, cor etc)
  function setValor(chave, valor) {
    console.log('entrou no setValor');
    setValores({
      ...valores,
      [chave]: valor, // ex -> titulo: 'valor'
    });
  }

  // mudando os valores dos campos através do setValor
  function handleChange(infosDoEvento) {
    console.log('entrou no handleChange');
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return {
    handleChange,
    valores,
    clearForm,
  };
}

export default useForm;
