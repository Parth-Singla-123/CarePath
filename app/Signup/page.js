"use client"
import { FaGoogle } from 'react-icons/fa';
import { useFormState, useFormStatus } from 'react-dom'
import React from 'react';
import { signup } from '../actions/auth';

export default function SignUpPage() {
  const [state, action] = useFormState(signup, undefined);
  return (
    <div className="relative min-h-screen flex bg-cover bg-center bg-[url('/Assets/images/bgimage2.jpeg')]" >

      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0128008a] via-black via-transparent via-black via-[#0128008a] to-black opacity-90 z-0"></div>

      <div className="relative z-10 w-full max-w-sm sm:mr-10 sm:ml-auto mx-auto bg-green-100 bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg p-6 my-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Create an Account</h2>

        <form action={action}>

          <input
            type="text" name="name" id="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 mb-4 placeholder:text-gray-600 bg-white bg-opacity-40 border border-gray-400 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {state?.errors?.name &&
            <div className="absolute z-2 text-xs font-medium border-[1px] border-black bg-gray-50 bg-opacity-85 w-28 p-2 -right-1 top-24 rounded-bl-3xl rounded-r-3xl transition-opacity duration-300 ease-in-out shadow-md">
              <p className="text-orange-700 opacity-85">{state.errors.name}</p>
            </div>
          }

          <input
            type="email" name="email" id="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 placeholder:text-gray-600 bg-white bg-opacity-40 border border-gray-400 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {state?.errors?.email &&
            <div className="absolute z-2 text-xs font-medium border-[1px] border-black bg-gray-50 bg-opacity-85 w-28 p-2 -right-0 -my-8 rounded-bl-3xl rounded-r-3xl transition-opacity duration-300 ease-in-out shadow-md">
              <p className="text-orange-700 opacity-85">{state.errors.email}</p>
            </div>}

          <input
            type="password" name="password" id="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 placeholder:text-gray-600 bg-white bg-opacity-40 border border-gray-400 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

        <div className="w-full border-t border-gray-300 my-3">
        </div>

        <button className="flex items-center justify-center w-full px-6 py-3 mb-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
          <FaGoogle className="mr-2" />
          Sign up with Google
        </button>

        <p className="mt-4 text-sm text-gray-300">
          Already have an account? <a href="/auth" className="text-blue-400 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type='submit' className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
      Sign Up
    </button>
  )
}