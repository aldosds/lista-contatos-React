import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  titulo,
  descricao1: descricao1Original,
  descricao2: descricao2Original,
  complemento: complementoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao1, setDescricao1] = useState('')
  const [descricao2, setDescricao2] = useState('')
  const [complemento, setComplemento] = useState('')

  useEffect(() => {
    if (descricao1Original.length > 0) {
      setDescricao1(descricao1Original)
    }
  }, [descricao1Original])

  useEffect(() => {
    if (descricao2Original.length > 0) {
      setDescricao2(descricao2Original)
    }
  }, [descricao2Original])

  useEffect(() => {
    if (complementoOriginal.length > 0) {
      setComplemento(complementoOriginal)
    }
  }, [complementoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao1(descricao1Original)
    setDescricao2(descricao2Original)
    setComplemento(complementoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao1}
        onChange={(evento) => setDescricao1(evento.target.value)}
        type="email"
        placeholder="E-mail"
      />
      <S.Descricao
        disabled={!estaEditando}
        value={descricao2}
        onChange={(evento) => setDescricao2(evento.target.value)}
        type="tel"
        placeholder="Telefone"
      />
      <S.Complemento
        disabled={!estaEditando}
        value={complemento}
        onChange={(evento) => setComplemento(evento.target.value)}
        placeholder="Digite um complemento"
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    descricao1: descricao1Original,
                    descricao2: descricao2Original,
                    complemento: complementoOriginal,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
