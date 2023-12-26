import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [descricao1, setDescricao1] = useState('')
  const [descricao2, setDescricao2] = useState('')
  const [complemento, setComplemento] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        descricao1,
        descricao2,
        complemento
      })
    )
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Nome>Nova tarefa</S.Nome>
      <Form onSubmit={cadastrarContato}>
        <S.Descricao
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome do Contato"
        />
        <S.Descricao
          value={descricao1}
          onChange={(evento) => setDescricao1(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <S.Descricao
          value={descricao2}
          onChange={(evento) => setDescricao2(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <S.Complemento
          value={complemento}
          onChange={({ target }) => setComplemento(target.value)}
          as="textarea"
          placeholder="Digite um complemento"
        />
        <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
      </Form>
    </S.MainContainer>
  )
}

export default Formulario
