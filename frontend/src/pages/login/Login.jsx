import { useState } from "react";
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })
    const { loading, login } = useLogin();

    const handleInput = (e) => {
        e.preventDefault();
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(inputs)
        await login(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 '>
                <h1 className='text-3xl font-semibold text-center text-white'>Login <span className='text-green-400'>Chat App</span></h1>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text text-white'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className="w-full input input-bordered h-10" name="username" onChange={handleInput} />
                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <input type="text" placeholder='Enter Password' className="w-full input input-bordered h-10" name="password" onChange={handleInput} />
                        <Link to={'/signup'} className='text-sm hover:underline hover:text-green-500 mt-2 inline-block text-green-200'>Don't have an account</Link>
                        <div>
                            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                                {loading ? <span className='spinner loading-spinner'></span> : "Login"}
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login