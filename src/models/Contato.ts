class Contato {
  nome: string
  descricao1: string
  descricao2: string
  complemento: string
  id: number

  constructor(
    nome: string,
    descricao1: string,
    descricao2: string,
    complemento: string,
    id: number
  ) {
    this.nome = nome
    this.descricao1 = descricao1
    this.descricao2 = descricao2
    this.complemento = complemento
    this.id = id
  }
}

export default Contato
