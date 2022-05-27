import React from 'react'

function Login() {
  return (
    <div className="mx-auto lg:w-96 md:w-3/5 sm:w-96 bg-white rounded-md">
            <div className="p-5">
                <div className="py-4 text-5xl font-bold text-darkColor text-center">Login</div>
                <hr className="border-green-800 mx-5" />
                
                <div className="px-5 py-2">
                    <label className="block text-darkColor text-lg font-bold pb-2">Email</label>
                    <input type="text" className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"></input>
                </div>
                <div className="px-5 py-2">
                    <label className="block text-darkColor text-lg font-bold pb-2">Password</label>
                    <input type="password" className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"></input>
                </div>

                <div className="px-5 py-8">
                    <button className="text-2xl py-2 border text-lightColor hover:border-lightColor focus:border-lightColor bg-darkColor p-2 rounded-md w-full" name="condition" id="condition">
                        Login
                    </button>
                </div>

            </div>
        </div >
  )
}

export default Login