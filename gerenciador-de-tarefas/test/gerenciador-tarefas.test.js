import React from "react";
import ReactDOM from "react-dom";
import GerenciadorTarefas from "../src/gerenciador-tarefas";

it("deve renderizar o projeto ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GerenciadorTarefas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
