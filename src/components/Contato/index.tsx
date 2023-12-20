import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  descricao1: string
  descricao2: string
  complemento: string
}

const Contato = ({ titulo, descricao1, descricao2, complemento }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Descricao value={descricao1} type="email" placeholder="E-mail" />
      <S.Descricao value={descricao2} type="phone" placeholder="Telefone" />
      <S.Complemento value={complemento} placeholder="Digite um complemento" />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
