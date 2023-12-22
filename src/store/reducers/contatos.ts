import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      titulo: 'Marcos',
      descricao1: 'marcos@emaiil.com',
      descricao2: '81 654345678',
      complemento: 'Tudo certo',
      id: 1
    },
    {
      titulo: 'Beto',
      descricao1: 'marcos@emaiil.com',
      descricao2: '81 654345678',
      complemento: 'Tudo certo',
      id: 2
    },
    {
      titulo: 'Maira',
      descricao1: 'marcos@emaiil.com',
      descricao2: '81 654345678',
      complemento: 'Tudo certo',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
