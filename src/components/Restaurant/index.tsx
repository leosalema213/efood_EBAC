import { Card, Infos, Rating, Title, CardDescription, Botao } from './styles'
import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

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
  <Card>
    <img src={image} alt="teste" />
    <Infos>
      <Tag>{infos}</Tag>
    </Infos>
    <CardDescription>
      <Title>
        <h2>{name}</h2>
        <Rating>
          {rating}
          <img src={estrela} alt="" />
        </Rating>
      </Title>
      <p>{description}</p>
      <Botao to={link}>Saiba mais</Botao>
    </CardDescription>
  </Card>
)

export default RestaurantCard
