import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3'
            type='password'
            placeholder='Enter your password'
          />
          <button
            type='submit'
            className='mt-5 bg-blue-500 text-white px-4 py-2 text-xl rounded-full'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
