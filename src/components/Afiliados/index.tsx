import Tag from '../Tag'
import { Card, Infos, Rating, Title, CardDescription, Botao } from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  name: string
  description: string
  image: string
  rating: number
  infos: string[]
}

const AfiliadoCard = ({ name, description, image, rating, infos }: Props) => (
  <Card>
    <img src={image} alt="teste" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
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
      <Botao>Saiba mais</Botao>
    </CardDescription>
  </Card>
)

export default AfiliadoCard
