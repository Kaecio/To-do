import React from "react";
import ReactDOM from "react-dom";
import CadastrarTarefas from "./cadastrar-tarefas";

describe("Teste do componentes de cadastro de tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CadastrarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
