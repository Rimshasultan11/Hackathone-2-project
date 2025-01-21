"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    try {
      // Fetch and validate cart data from localStorage
      const storedCart = JSON.parse(
        localStorage.getItem("cart") || "[]"
      ) as CartItem[];
      const validCart = storedCart.map((item) => ({
        ...item,
        price: Number(item.price) || 0,
        quantity: Number(item.quantity) || 1,
      }));
      setCartItems(validCart);
    } catch (error) {
      console.error("Error reading cart data:", error);
      setCartItems([]);
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Form validation check
  const isFormValid = () => {
    return (
      billingInfo.fullName &&
      billingInfo.email &&
      billingInfo.address &&
      billingInfo.city
    );
  };

  const handleOrderPlace = () => {
    if (!isFormValid()) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all the billing information.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Order Placed Successfully!",
      text: "Thank you for your order. You will receive an email confirmation shortly.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      // Clear cart after order placement
      localStorage.removeItem("cart");
      setIsOrderPlaced(true);
      window.location.href = "/"; // Redirect after placing the order
    });
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-10">Checkout</h1>
      <div className="w-[90%] mx-auto max-w-[1200px] mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Section */}
        <div className="p-6 border rounded-md bg-white shadow-md">
          <h2 className="text-xl font-bold mb-6">Billing Information</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="fullName"
              value={billingInfo.fullName}
              onChange={handleBillingChange}
              placeholder="Full Name"
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={billingInfo.email}
              onChange={handleBillingChange}
              placeholder="Email Address"
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              name="address"
              value={billingInfo.address}
              onChange={handleBillingChange}
              placeholder="Address"
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              name="city"
              value={billingInfo.city}
              onChange={handleBillingChange}
              placeholder="City"
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={handleOrderPlace}
              disabled={!isFormValid()} // Disable button if form is invalid
              className="w-full bg-[#2A254B] text-white py-3 rounded-md font-semibold disabled:bg-gray-400"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="p-6 border rounded-md bg-gray-50 shadow-md">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="flex flex-col gap-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-3 border-b"
                >
                  <div className="flex items-center">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="w-[100px] h-[100px] object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="mt-6">
            <div className="flex justify-between text-lg font-medium">
              <p>Subtotal:</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <p>Shipping:</p>
              <p>$20.00</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <p>Total:</p>
              <p>${(calculateTotal() + 20).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      {isOrderPlaced && (
        <div className="mt-6 text-center text-[#2A254B] font-semibold">
          Your order has been successfully placed!
        </div>
      )}
    </div>
  );
};

export default Checkout;
