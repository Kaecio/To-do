import React, { useState } from 'react'
// import { Button, Form, Jumbotron } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Tarefa from '../models/tarefa.modal'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

function CadastrarTarefas() {
  const [tarefa, setTarefa] = useState('')
  const [formValidado, setFormValidado] = useState(false)

  const cadastrar = (event) => {
    event.preventDefault()
    setFormValidado(true)
    if (event.currentTarget.checkValidity() === true) {
      // obtem as tarefas
      const tarefasDb = localStorage['tarefas']
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : []
      // persistir as CadastrarTarefas
      tarefas.push(new Tarefa(new Date().getTime(), tarefa, false))
      localStorage['tarefas'] = JSON.stringify(tarefas)
    }
  }

  const handleTxgtTarefa = (event) => {
    setTarefa(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <form validate={formValidado} noValidate onSubmit={cadastrar}>
        <div role="form" className="todoForm">
          <Grid cols="19 9 10" />
          <input
            type="text"
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            value={tarefa}
            onChange={handleTxgtTarefa}
          ></input>

          <Grid cols="12 3 2" />
          <IconButton style="primary"></IconButton>
        </div>
      </form>
    </div>
  )
}

export default CadastrarTarefas
