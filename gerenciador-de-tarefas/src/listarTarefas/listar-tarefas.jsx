import React, { useState, useEffect } from 'react'
import ItensListarTarefas from './itens-lista-tarefas'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

function ListarTarefas() {
  const [tarefas, setTarefas] = useState([])
  const [carregarTarefas, setCarregarTarefas] = useState(true)

  useEffect(() => {
    function obterTarefes() {
      const tarefasDb = localStorage['tarefas']
      let listarTarefas = tarefasDb ? JSON.parse(tarefasDb) : []
      setTarefas(listarTarefas)
      console.log(listarTarefas)
    }
    if (carregarTarefas) {
      obterTarefes()
      setCarregarTarefas(false)
    }
  }, [carregarTarefas])

  return (
    <div className="text-center">
      <h3>Tarefa a fazer</h3>
      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <Link to="/cadastrarTarefa" className="btn btn-success btn-sm" data-testid="btn-nova-tarefa">
                + Nova Tarefa
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <ItensListarTarefas tarefas={tarefas} recarregarTarefas={setCarregarTarefas} />
        </tbody>
      </Table>
    </div>
  )
}

export default ListarTarefas
