import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import * as S from './styles'

type Props = {
  name: string
  description: string
  image: string
  rating: number
  infos: string
  link: string
}

const RestaurantCard = ({
  name,
  description,
  image,
  rating,
  infos,
  link
}: Props) => (
  <S.Card>
    <img src={image} alt="teste" />
    <S.Infos>
      <Tag>{infos}</Tag>
    </S.Infos>
    <S.CardDescription>
      <S.Title>
        <h2>{name}</h2>
        <S.Rating>
          {rating}
          <img src={estrela} alt="" />
        </S.Rating>
      </S.Title>
      <p>{description}</p>
      <S.Botao to={link}>Saiba mais</S.Botao>
    </S.CardDescription>
  </S.Card>
)

export default RestaurantCard
