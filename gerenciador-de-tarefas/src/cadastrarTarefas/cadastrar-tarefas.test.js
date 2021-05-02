import React from 'react'
import ReactDOM from 'react-dom'
import CadastrarTarefas from './cadastrar-tarefas'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componentes de cadastro de tarefas', () => {
  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CadastrarTarefas />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Deve cadastrar uma nova tarefa', () => {
    const { getByTestId } = render(<CadastrarTarefas />)
    fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Testar componente' } })
    fireEvent.click(getByTestId('btn-cadastrar'))
  })
})
