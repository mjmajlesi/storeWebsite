import Container from '../components/container'
import Button from '../components/buttuns'
import { useAppContext } from '../components/AppContext'
import Carts from '../components/Carts'
export default function Cart() {

  const {cardItems} = useAppContext()
  return (
    <div>
      <Container>
        { cardItems.map(items => (
           <Carts {...items}/>
        ))}

        <div className='bg-gray-200 p-3'>
          <h3>price: {}$</h3>
          <h3>off: 3$</h3>
          <h2>priceWithOff: 22$</h2>
        </div>
        <Button className='my-3 !p-3' variant='seccece'>Submit</Button>
      </Container>
    </div>
  )
}

/*
const {cardItems} = useAppShoppingCard() == const {cardItems} = useContext(AppShoppingCard);
*/