import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeFromCart } from "../../app/features/userAuth/userAuthSlice";

const AddToCartPage = () => {
  const { phurches } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (phurches && Array.isArray(phurches)) {
      setCart(
        phurches.map((p) => ({
          ...p,
          quantity: 1,
          price: parseFloat(p.price) || 0, // Convert price to number
          image: p.image || "https://via.placeholder.com/150", // Fallback image
        }))
      );
    }
  }, [phurches]);
  // const products = () => {
  //   phurches.map((item) => {
  //     return item;
  //   });
  // };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const getTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Shopping Cart
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products List */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 border-b">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5 sm:mt-0">
                <button
                  className="text-red-500 text-2xl"
                  onClick={() => dispatch(removeFromCart(item.id))}>
                  <FaRegTrashCan />
                </button>
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, -1)}>
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, 1)}>
                  +
                </button>
              </div>
              <p className="text-gray-800 font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800">${getTotal()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-800">Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${getTotal()}</span>
          </div>
          <NavLink to={`/cashout`}>
            <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition-colors">
              Checkout
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
