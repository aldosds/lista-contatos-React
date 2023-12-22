import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  const contatos = filtraContatos()

  return (
    <Container>
      <p>
        {contatos.length} contato(s): {termo}
      </p>
      <ul>
        {contatos.map((c) => (
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
