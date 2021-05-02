import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="ToDo">
      <h1>Pg Principal</h1>
      <Link to="/cadastrarTarefa" className="btn btn-success">
        Cadastrar Tarefa
      </Link>
    </div>
  )
}

export default Main
