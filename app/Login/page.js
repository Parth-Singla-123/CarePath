"use client"
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { redirect } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom'
import { login } from '../actions/auth';

export default function AuthPage() {
  const [state, action] = useFormState(login, undefined);

  return (
    <>
      <div className="relative min-h-screen flex bg-cover bg-center bg-[url('/Assets/images/bgimage.jpg')]" >

        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0128008a] via-black via-transparent via-black via-[#0128008a] to-black opacity-90 z-0"></div>

        <div className="relative z-10 w-full max-w-sm sm:mr-16 sm:ml-auto mx-auto bg-green-100 bg-opacity-20 backdrop-blur rounded-xl shadow-lg p-6 my-auto flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Welcome to CarePath</h2>
          <form action={action}>
            <input
              type="email" name="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 bg-white bg-opacity-40 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {state?.errors?.email &&
              <div className="absolute z-2 text-xs font-medium border-[1px] border-black bg-gray-50 bg-opacity-85 w-28 p-2 -right-0 -my-8 rounded-bl-3xl rounded-r-3xl transition-opacity duration-300 ease-in-out shadow-md">
                <p className="text-orange-700 opacity-85">{state.errors.email}</p>
              </div>}

            <input
              type="password" name="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 bg-white bg-opacity-40 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {state?.errors?.password && (
              <div className="-m-8 absolute z-2 text-xs font-medium border-[1px] border-black bg-gray-50 bg-opacity-85 w-36 text-ellipsis p-2 -right-0 rounded-bl-3xl rounded-r-3xl text-orange-700 transition-opacity duration-300 ease-in-out shadow-md">
                <p>Password must :</p>
                <ul>
                  {state.errors.password.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {state?.usererror && 
              <div className="text-red-700 text-sm -mt-2 mb-2 text-center">
                <p>{state.usererror}</p>
              </div>
            }
            <SubmitButton />

          </form>

          <div className="w-full border-t border-gray-300 my-4">
          </div>

          <button type='submit' className="flex items-center justify-center w-full px-6 py-3 mb-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
            <FaGoogle className="mr-2" />
            Log in with Google
          </button>

          <p className="mt-2 text-sm text-gray-300">
            Don’t have an account? <a href="#" className="text-orange-400 font-medium hover:underline">Sign up</a>
          </p>

        </div>
      </div>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type='submit' disabled={pending} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
      Log In
    </button>
  )
}