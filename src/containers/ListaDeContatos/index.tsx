import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 contatos: {termo}</p>
      <ul>
        {filtraTarefas().map((c) => (
          <li key={c.titulo}>
            <Contato
              titulo={c.titulo}
              descricao1={c.descricao1}
              descricao2={c.descricao2}
              complemento={c.complemento}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
