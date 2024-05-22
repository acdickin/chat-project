import React from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'

const Singup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 '>
                <h1 className='text-3xl font-semibold text-center text-white'>Signup <span className='text-green-400'>Chat App</span></h1>

                <form>
                    <div>
                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text text-white'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Jane Doe' className="w-full input input-bordered h-10" />

                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text text-white'>Username</span>
                        </label>
                        <input type="text" placeholder='janedoe' className="w-full input input-bordered h-10" />

                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <input type="text" placeholder='Password' className="w-full input input-bordered h-10" />

                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text text-white'>Confirm Password</span>
                        </label>
                        <input type="text" placeholder=' Confirm Password' className="w-full input input-bordered h-10" />
                        <GenderCheckBox />
                        <Link to={"/login"} className='text-sm hover:underline hover:text-green-400 mt-2 inline-block text-green-200'>Already have an account?</Link>

                        <div>
                            <button className='btn btn-block btn-sm mt-2'>Login</button>
                        </div>
                    </div>

                </form>
            </div>
        </div >
    )
}

export default Singup