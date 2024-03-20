'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoginInProgress(true);
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
      redirect: false,
    })
      .then(({ ok, error }) => {
        if (ok) {
          console.log('login succeeded');
        } else {
          setError(true);
        }
      })
      .finally(() => setLoginInProgress(false));
  };
  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>
      <form className='max-w-xs mx-auto' onSubmit={(e)=>handleFormSubmit(e)}>
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          disabled={loginInProgress}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          disabled={loginInProgress}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loginInProgress} type='submit'>
          Login
        </button>
        <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div>
        <button
          type='button'
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className='flex gap-4 justify-center'
        >
          <Image src={'/google.jpg'} alt={''} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}
