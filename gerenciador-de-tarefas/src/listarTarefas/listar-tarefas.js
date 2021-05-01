import React from 'react'
import { Link } from 'react-router-dom'

function ListarTarefas() {
  return (
    <div>
      <Link to="/cadastrarTarefa" className="btn btn-success btn-sm">
        Nova Tarefa
      </Link>
    </div>
  )
}

export default ListarTarefas
