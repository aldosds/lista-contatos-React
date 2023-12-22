class Contato {
  titulo: string
  descricao1: string
  descricao2: string
  complemento: string
  id: number

  constructor(
    titulo: string,
    descricao1: string,
    descricao2: string,
    complemento: string,
    id: number
  ) {
    this.titulo = titulo
    this.descricao1 = descricao1
    this.descricao2 = descricao2
    this.complemento = complemento
    this.id = id
  }
}

export default Contato
