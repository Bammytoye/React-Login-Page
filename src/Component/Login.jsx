

const Login = () => {
    return (
        <div className='w-full min-h-screen flex items-start'>
            <div className='w-1/2 h-full max-w-[500px] mx-auto border border-gray-700 rounded-xl bg-[#2b0e0e] flex flex-col p-10 justify-between items-center'>
                <h1 className='w-full text-2xl text-left text-[#ffffff] font-extrabold underline underline-offset-2'>
                    Zeke Brand
                </h1>

                <div className='w-full flex flex-col text-left mb-2'>
                    <div className='flex flex-col w-full mb-4'>
                    <h3 className='text-3xl font-semibold mt-4 text-white'>Login</h3>
                    <p className='text-base mb-2 text-white'>
                        Please, enter your details. Welcome back...
                    </p>
                    </div>

                    <div className='w-full flex flex-col mb-5'>
                        <input 
                            type="email"
                            placeholder='Email'
                            className='w-full py-2 text-white border-b mb-3 border-black outline-none focus:outline-none bg-transparent' 
                        />

                        <input 
                            type="password"
                            placeholder='Password'
                            className='w-full py-2 text-white border-b mb-3 border-black outline-none focus:outline-none bg-transparent' 
                        />
                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex'>
                            <input type="checkbox" name="checkbox" id="checkbox" className='w-4 h-4 mr-2'/>
                            <p className='text-sm text-white'>Remember Me</p>
                        </div>

                        <p className='text-sm text-white whitespace-nowrap font-medium cursor-pointer underline underline-offset-2'>
                            Forget Password?
                        </p>
                    </div>

                    <div className='w-full flex flex-col my-4'>
                        <button className='w-full bg-[#060606] my-2 p-2 rounded-md text-center flex items-center justify-center text-white cursor-pointer'>
                            Login
                        </button>

                        <button className='w-full font-bold text-[#060606] my-2 p-2 border border-black rounded-md text-center flex items-center justify-center bg-white cursor-pointer'>
                            Register
                        </button>
                    </div>

                    <div className="mb-3 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-base font-bold text-white">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                    <button className='w-full font-bold text-[#060606] my-2 p-2 border border-black rounded-md text-center flex items-center justify-center bg-white cursor-pointer'>
                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20px" height="25px" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg>
                            Sign In with Google
                        </button>
                </div>

                <div className='w-full items-center justify-center flex'>
                    <p className='text-sm font-normal text-white'>
                        Don&apos;t have a account? <a href='#' className='font-semibold underline underline-offset-2'> Sign up for free</a> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login