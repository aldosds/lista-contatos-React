import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Titulo>Nome do Contato</S.Titulo>
    <S.Descricao type="email" placeholder="Digite o E-mail" />
    <S.Descricao type="phone" placeholder="Digite o Telefone" />
    <S.Complemento placeholder="Digite um complemento" />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
