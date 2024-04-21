'use client';

import { Checkbox } from '@nextui-org/react';
import React from 'react'

const RegisterPage = () => {
    return (
        <div>
            <div className="lg:m-10">
                <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
                    <h1 className="mb-6 text-xl text-center  bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text 
                        text-transparent  font-semibold lg:text-3xl">Register</h1>

                    <div className="grid gap-3 md:grid-cols-2">
                        <div>
                            <label className=""> First Name </label>
                            <input type="text" placeholder="Your Name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                        <div>
                            <label className=""> Last Name </label>
                            <input type="text" placeholder="Last  Name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                    </div>
                    <div>
                        <label className=""> Username </label>
                        <input type="text" placeholder="Username" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div>
                        <label className=""> Email Address </label>
                        <input type="email" placeholder="Info@example.com" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div>
                        <label className=""> Password </label>
                        <input type="password" placeholder="******" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div className="grid gap-3 lg:grid-cols-2">
                        <div>
                            <label className=""> Gender </label>
                            <div className="relative w-56 mt-2 bg-gray-100 rounded-lg">
                                <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
                                <label htmlFor="select-1" className="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring">Select Option </label>
                                <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                                <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                                    <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">Male</li>
                                    <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">Female</li>
                                    <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">Other</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <label className=""> Phone: <span className="text-sm text-gray-400">(optional)</span> </label>
                            <input type="text" placeholder="+543 5445 0543" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="block">

                            <Checkbox color='primary' defaultSelected>I agree to the Terms and Conditions</Checkbox>
                        </div>
                    </div>

                    <div>
                        <button type="button" className="grid w-full cursor-pointer select-none rounded-md border 
                                    bg-gradient-to-r from-sky-400 to-blue-500 bg-indigo-500 py-2 px-5 
                                    text-center align-middle text-sm text-white shadow font-bold
                                    hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600
                                 focus:bg-indigo-600 focus:text-white focus:shadow-none ">Get Started</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default RegisterPage
