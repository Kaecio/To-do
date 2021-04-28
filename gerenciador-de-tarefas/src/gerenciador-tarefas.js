import React from "react";
import "./gerenciador-tarefas.css";
import { useRoutes } from "hookrouter";

const routes = {
  "/": () => <ListarTarefa />,
  "/cadastrar": () => <CadastrarTarefa />,
  "/atualizar/:id": ({ id }) => <AtualizarTarefa id={id} />,
};

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
