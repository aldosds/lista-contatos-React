import * as S from './styles'

export type Props = {
  contador: number
  legenda: string
}

const FiltroCard = ({ contador, legenda }: Props) => (
  <S.Card>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
