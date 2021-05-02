function Tarefa(id, nome, concluida) {
  this.id = id
  this.nome = nome
  this.concluida = concluida

  let time = new Date(),
    dia = time.getDate().toString(),
    diaF = dia.length === 1 ? '0' + dia : dia,
    mes = (time.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length === 1 ? '0' + mes : mes,
    anoF = time.getFullYear()

  return {
    id: id,
    nome: nome,
    concluida: concluida,
    time: diaF + '/' + mesF + '/' + anoF,
  }
}

export default Tarefa
