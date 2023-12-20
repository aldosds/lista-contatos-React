import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    titulo: 'André',
    descricao1: 'email@mail.com',
    descricao2: '81 678678678',
    complemento: 'Tudo certo mô vei'
  },
  {
    titulo: 'Rafael',
    descricao1: '',
    descricao2: '',
    complemento: ''
  },
  {
    titulo: 'Marta',
    descricao1: 'email@mail.com',
    descricao2: '81 678678678',
    complemento: 'Tudo certo'
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>2 contatos: `&quot;`termo`&ldquo;`</p>
    <ul>
      {contatos.map((c) => (
        <li key={c.titulo}>
          <Contato
            titulo={c.titulo}
            descricao1={c.descricao1}
            descricao2={c.descricao2}
            complemento={c.complemento}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
