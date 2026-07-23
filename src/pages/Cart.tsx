import Container from "../components/container";
import Button from "../components/buttons";
import { useAppContext } from "../components/AppContext";
import Carts from "../components/Carts";

export default function Cart() {
  const { cardItems } = useAppContext();
  const subtotal = cardItems.reduce((total, item) => total + (item.id * item.qty), 0);
  const discount = cardItems.length > 0 ? 3 : 0;
  const total = subtotal - discount;

  return (
    <div className="bg-slate-950 text-white min-h-screen py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

        {cardItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-900 rounded-xl border border-slate-800">
            <h2 className="text-2xl text-slate-300 font-semibold my-6">
              Your cart is currently empty. Explore our products and add something awesome!
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardItems.map((item) => (
              <Carts key={item.id} {...item} />
            ))}
          </div>
        )}

        {cardItems.length > 0 && (
          <div className="mt-10 bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-800 lg:sticky lg:bottom-0 lg:mt-0 lg:ml-auto lg:max-w-md">
            <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
            <div className="flex justify-between text-slate-300 mb-2">
              <span>Subtotal</span>
              <span>{subtotal} $</span>
            </div>
            <div className="flex justify-between text-slate-300 mb-4">
              <span>Discount</span>
              <span>-{discount}$</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t border-slate-800 pt-4 mt-2">
              <span>Total</span>
              <span className="text-[#1e98d5]">{total}$</span>
            </div>
            <Button className="w-full !p-4 mt-6 text-lg" variant="login">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
