import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Harry Potter',
      price: 59.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Lord of the Rings',
      price: 29.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Marvel',
      price: 89.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, 'decrease')}
                      className="px-2 py-1 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 'increase')}
                      className="px-2 py-1 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800 ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">Your cart is empty.</p>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800">Free</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="text-lg font-semibold text-gray-800">Total</span>
              <span className="text-lg font-semibold text-gray-800">${calculateTotal()}</span>
            </div>
            <button
              className="w-full mt-6 py-2 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
