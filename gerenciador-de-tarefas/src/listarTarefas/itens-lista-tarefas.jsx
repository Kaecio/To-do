import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ConcluirTarefa from './concluirTarefa'

function ItensListarTarefas(props) {
  function marcarTarefaConcluida(tarefa) {
    return tarefa.concluida ? 'line-through' : 'none'
  }
  return props.tarefas.map((tarefa) => (
    <tr key={tarefa.id} data-testid="tarefa">
      <td width="75%" data-testid="nome-tarefa" style={{ textDecoration: marcarTarefaConcluida(tarefa) }}>
        {tarefa.nome}
      </td>
      <td className="text-right">
        <ConcluirTarefa
          tarefa={tarefa}
          recarregarTarefas={props.recarregarTarefas}
          className={tarefa.concluida ? 'hidden' : null}
        />
        <Link to={'/atualizarTarefa/' + tarefa.id} className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}>
          remove
        </Link>
      </td>
    </tr>
  ))
}

ItensListarTarefas.PropTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
}

export default ItensListarTarefas
