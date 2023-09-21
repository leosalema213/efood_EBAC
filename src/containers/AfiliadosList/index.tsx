import Afiliados from '../../models/Afiliados'
import AfiliadoCard from '../../components/Afiliados'
import { ListContainer } from './styles'

type Props = {
  afiliados: Afiliados[]
}
const AfiliadosList = ({ afiliados }: Props) => (
  <>
    <ListContainer className="containerLarge">
      {afiliados.map((a) => (
        <AfiliadoCard
          key={a.id}
          name={a.name}
          description={a.description}
          infos={a.infos}
          image={a.image}
          rating={a.rating}
        />
      ))}
    </ListContainer>
  </>
)
export default AfiliadosList
