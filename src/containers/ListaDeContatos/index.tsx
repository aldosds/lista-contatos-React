import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Nome } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <Nome as="p">
        {contatos.length} contato(s): {termo}
      </Nome>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              descricao1={c.descricao1}
              descricao2={c.descricao2}
              complemento={c.complemento}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
