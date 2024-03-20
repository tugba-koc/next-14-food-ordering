'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [createdUser, setCreatedUser] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.status === 200) {
          setCreatedUser(true);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setCreatingUser(false);
      });
  };

  return (
    <section className='mt-8'>
      <h1 className='mb-4 text-center text-primary text-4xl'>Register</h1>
      {createdUser && (
        <p className='text-center mb-5'>
          You successfully created an account! Please{' '}
          <Link className='underline text-red-500' href='/login'>
            Login
          </Link>
        </p>
      )}
      {error && (
        <p className='text-center mb-5 text-red-500'>
          There was an error creating your account. Please try again.
        </p>
      )}
      <form
        className='block max-w-xs mx-auto'
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          type='email'
          placeholder='email'
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
      </form>
      <div className='my-4 text-center text-gray-500'>
        or Login with provider
      </div>
      <button
        className='mx-auto max-w-xs flex gap-4 justify-center'
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        <Image src='/google.jpg' alt='google' width={24} height={24} />
        Login with Google
      </button>
      <div className='text-center my-4'>
        <Link className='text-gray-500 underline' href='/login'>
          Already have an account? Login here
        </Link>
      </div>
    </section>
  );
};

export default RegisterPage;
