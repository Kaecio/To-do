import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

function ConcluirTarefa(props) {
  const [exibirModal, setExibirModal] = useState(false)

  function handleOpenModal(event) {
    event.preventDefault()
    setExibirModal(true)
  }

  function handleCloseModal() {
    setExibirModal(false)
  }

  function handleConcluirTarefa(event) {
    event.preventDefault()
    const tarefasDb = localStorage['tarefas']
    let tarefas = tarefasDb ? JSON.parse(tarefasDb) : []
    tarefas = tarefas.map((tarefa) => {
      if (tarefa.id === props.tarefa.id) {
        tarefa.concluida = true
      }
      return tarefa
    })
    localStorage['tarefas'] = JSON.stringify(tarefas)
    setExibirModal(false)
    props.recarregarTarefas(true)
  }

  return (
    <span className={props.className}>
      <Button className="btn-sm" onClick={handleOpenModal} data-testid="btn-abrir-modal">
        concluida
      </Button>
      <Modal show={exibirModal} onHide={handleCloseModal} data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Concluir tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente concluir a seguinte tarefa
          <br />
          <strong>{props.tarefa.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConcluirTarefa} data-testid="btn-concluir">
            Sim
          </Button>
          <Button variant="secondary" onClick={handleCloseModal} data-testid="btn-fechar-modal">
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

ConcluirTarefa.prototype = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

export default ConcluirTarefa
