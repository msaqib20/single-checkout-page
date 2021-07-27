import { useState, useEffect } from "react";
import data from "../pages/api/data";

export default function Cart(props) {
  const { cartItems } = props;
  const [finalCartItems, setFinalCartItems] = useState([]);
  const [promo, setPromo] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [isPromoCodeCancelled, setIsPromoCodeCancelled] = useState(false);

  /* Conditional Promo code 
  Promo Code: FF9543D1
  Condition: Reduces the "docgen" price to $8.99 a unit when at least 10 documents are purchased
  */
  const applyPromo = () => {
    var promoIndex = null;
    for (var i = 0; i < data.promoCodes.length; i++) {
      if (data.promoCodes[i].code == promo) {
        promoIndex = i;
        break;
      }
    }
    let updatedCartItems = cartItems;
    if (promoIndex != null) {
      let targetItems = data.promoCodes[promoIndex].targetItems;
      for (var i = 0; i < targetItems.length; i++) {
        for (var j = 0; j < cartItems.length; j++) {
          if (cartItems[j].id == targetItems[i].id) {
            updatedCartItems[j].price =
              cartItems[j].qty >= targetItems[i].min
                ? targetItems[i].newPrice
                : cartItems[j].basePrice;
          }
        }
      }
      setIsUpdated(true);
    } else {
      for (var i = 0; i < cartItems.length; i++) {
        updatedCartItems[i].price = cartItems[i].basePrice;
      }
      setIsPromoCodeCancelled(true);
    }
    setFinalCartItems(updatedCartItems);
  };

  //   Total Price of all Products items list in the cart

  const totalPrice = finalCartItems.reduce(
    (accum, curr) => accum + curr.price * curr.qty,
    0
  );

  useEffect(() => {
    setIsUpdated(false);
    setIsPromoCodeCancelled(false);
    setFinalCartItems(cartItems);
    applyPromo();
  }, [cartItems, isUpdated, isPromoCodeCancelled]);
  return (
    <>
      <div className="xl:w-2/5 lg:w-full px-8 py-10 bg-[#f6f6f6]">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        {finalCartItems.length === 0 && (
          <div className="font-semibold inline-block mb-3 text-sm uppercase py-4">
            Cart Is Empty
          </div>
        )}
        {finalCartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <span className="font-semibold text-sm uppercase">{item.name}</span>
            <span className="font-semibold text-sm">
              {item.qty} x ${item.price}
            </span>
          </div>
        ))}

        {finalCartItems.length !== 0 && (
          <>
            <div className="pt-10 pb-3">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
                onChange={(event) => setPromo(event.target.value)}
              ></input>
              <button
                className="bg-red-500 hover:bg-red-600 px-5 py-2 mt-3 text-sm text-white uppercase"
                onClick={applyPromo}
              >
                Apply
              </button>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                type="submit"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
