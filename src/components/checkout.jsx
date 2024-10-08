import React from 'react';
import image from "../assets/confident-teacher-explaining-lesson-pupils 2.jpg";
function Payment () {
  return (
    <div className="container mx-auto p-8 font-sans flex flex-col md:flex-row gap-8">
      {/* Checkout Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <div className="flex items-center space-x-4 mb-6">
          <img src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png" alt="PayPal" className='h-14' />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1000px-American_Express_logo_%282018%29.svg.png" alt="American Express" className='h-14' />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" className='h-14' alt="Visa" />
          <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="MasterCard" className='h-14' />
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter name on Card"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter Card Number"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-600 mb-2" htmlFor="expiryDate">
                Expiration Date (MM/YY)
              </label>
              <input
                type="text"
                id="expiryDate"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter Expiration Date"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-600 mb-2" htmlFor="cvc">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter CVC"
              />
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <input type="checkbox" id="saveInfo" className="mr-2" />
            <label htmlFor="saveInfo" className="text-gray-600">
              Save my information for faster checkout
            </label>
          </div>
          <button className="bg-cyan-500 text-white py-3 w-full rounded-md font-medium">
            Confirm Payment
          </button>
        </form>
      </div>

      {/* Summary Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <h2 className="text-2xl font-bold mb-6">Summary</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-4">
            <img src={image} className="w-16 h-16 rounded-md" />
            <div>
              <p className="text-gray-800">Course Title</p>
              <p className="text-sm text-gray-500">Lorem ipsum dolor...</p>
              <p className="text-gray-800 font-bold">$24.69</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={image} alt="Product" className="w-16 h-16 rounded-md" />
            <div>
              <p className="text-gray-800">Course Title</p>
              <p className="text-sm text-gray-500">Lorem ipsum dolor...</p>
              <p className="text-gray-800 font-bold">$24.69</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>$51.38</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Coupon Discount</span>
            <span>0%</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>TAX</span>
            <span>$5</span>
          </div>
          <div className="flex justify-between font-bold text-gray-800 mt-2">
            <span>Total</span>
            <span>$56.38</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment ;
