import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
