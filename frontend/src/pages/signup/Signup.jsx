import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const { loading, signup } = useSignup();

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const handleInput = (e) => {
        e.preventDefault();
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const handleGenderChange = (gender) => {
        setInputs({ ...inputs, gender })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(inputs)
        await signup(inputs);
    }
    const inputItems = [
        { name: "fullName", text: 'Full Name', placeholder: "Jane Doe" },
        { name: "username", text: 'Username', placeholder: 'janedoe' },
        { name: "password", text: 'Password', placeholder: 'Password' },
        { name: "confirmPassword", text: 'Confirm Password', placeholder: ' Confirm Password' },
    ]

    const renderInputItems = () => {
        return inputItems.map((item) => (
            <div key={item.name}>
                < label className='label p-2 mt-4' >
                    <span className='text-base label-text text-white'>{item.text}</span>
                </label >
                <input type="text" placeholder={item.placeholder} className="w-full input input-bordered h-10" name={item.name} onChange={handleInput} />
            </div >
        ))
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 '>
                <h1 className='text-3xl font-semibold text-center text-white'>Signup <span className='text-green-400'>Chat App</span></h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        {renderInputItems()}
                        <GenderCheckBox onCheckboxChange={handleGenderChange} selectedGender={inputs.gender} />
                        <Link to={"/login"} className='text-sm hover:underline hover:text-green-400 mt-2 inline-block text-green-200'>Already have an account?</Link>

                        <div>
                            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                                {loading ? <span className='spinner loading-spinner'></span> : "Sign up"}
                            </button>
                        </div>

                    </div>

                </form>
            </div>
        </div >
    )
}

export default Signup

// {errorMessage ?
//     (<div role="alert" className="alert alert-error">
//         <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
//         <span>Error! {errorMessage}</span>
//     </div>)
//     : null}