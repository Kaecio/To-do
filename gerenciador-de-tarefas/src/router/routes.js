import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListarTarefas from "../listarTarefas/listar-tarefas";
import CadastrarTarefas from "../cadastrarTarefas/cadastrar-tarefas";
import AtualizarTarefas from "../atualizarTarefas/atualizar-tarefas";
import Main from "../mainpg/main";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/listarTarefa" component={ListarTarefas} />
        <Route path="/cadastrarTarefa" component={CadastrarTarefas} />
        <Route path="/atualizarTarefa/:id" component={AtualizarTarefas} />
      </Switch>
    </Router>
  );
}

export default Routes;
