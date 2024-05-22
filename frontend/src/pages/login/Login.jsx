import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 '>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-500'>Chat App</span></h1>

                <form>
                    <div>
                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text text-white'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className="w-full input input-bordered h-10" />
                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <input type="text" placeholder='Enter Password' className="w-full input input-bordered h-10" />
                        <a href='#' className='text-sm hover:underline hover:text-green-500 mt-2 inline-block text-green-200'>Don't have an account</a>
                        <div>
                            <button className='btn btn-block btn-sm mt-2'>Login</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login