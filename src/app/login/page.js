'use client';

import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoginInProgress(true);
    signIn('credentials', {
      email,
      password,
      redirect: false,
    })
      .then(({ ok, error }) => {
        if (ok) {
          console.log('ok login');
          setError(false);
          router.push('/');
        } else {
          console.log('not ok login');
          setError(true);
          setEmail('');
          setPassword('');
        }
      })
      .finally(() => setLoginInProgress(false));
  };
  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>
      {error && (
        <p className='text-center mb-5 text-red-500'>
          There was an error creating your account. Please try again.
        </p>
      )}
      <form className='max-w-xs mx-auto' onSubmit={(e) => handleFormSubmit(e)}>
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
      </form>
      <div className='my-4 text-center text-gray-500'>
        or login with provider
      </div>
      <button
        type='button'
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className='flex gap-4 justify-center mx-auto max-w-xs'
      >
        <Image src={'/google.jpg'} alt={''} width={24} height={24} />
        Login with google
      </button>
    </section>
  );
}
