import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up

  const handleToggle = () => setIsSignIn(!isSignIn);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
        
      <div className="bg-white shadow-lg rounded-lg w-[400px] absolute">
        
        <div className="flex justify-center border-b border-gray-200">
          <button
            className={`w-1/2 py-3 text-lg font-semibold ${
              isSignIn ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 py-3 text-lg font-semibold ${
              !isSignIn ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        <form className="px-8 py-6">
          {!isSignIn && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {!isSignIn && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center py-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {isSignIn
              ? "Don't have an account? "
              : 'Already have an account? '}
            <button
              onClick={handleToggle}
              className="text-blue-600 font-semibold hover:underline"
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;