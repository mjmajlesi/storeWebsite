import Container from "../components/container";
import Button from "../components/buttons";
import { useAppContext } from "../components/AppContext";
import Carts from "../components/Carts";

export default function Cart() {
  const { cardItems } = useAppContext();
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-4">
          {cardItems.map((item) => (
            <Carts key={item.id} {...item} />
          ))}
        </div>
        {cardItems.length === 0 ? (
          <h2 className="text-center text-2xl text-slate-300 font-semibold my-12">
            Your cart is currently empty. Explore our products and add something awesome!
          </h2>
        ) : (
          <div className="flex flex-col items-center justify-center w-fit mx-auto my-6">
            <div className="flex flex-col items-start justify-center gap-2">
              <h3>price: {cardItems.reduce((add, price) => add + (price.id * price.qty), 0)} $</h3>
              <h3>off: 3$</h3>
              <h2>priceWithOff: {cardItems.reduce((add, price) => add + (price.id * price.qty), 0) - 3} $</h2>
            </div>
            <Button className="my-3 !p-3" variant="login">
              Submit
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
