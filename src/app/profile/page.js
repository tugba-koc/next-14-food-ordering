'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ProfilePage = () => {
  const inputRef = useRef('');

  const session = useSession();

  const [error, setError] = useState(null);
  const [username, setUsername] = useState(session?.data?.user?.name || '');

  const { status, data } = session;

  const image = data?.user?.image;

  useEffect(() => {
    if (status === 'authenticated') {
      setUsername(data?.user?.name);
    }
  }, [data?.user?.name, session, status]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError(null);
  };

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault();

    const usernameRegex = /^([a-zA-Z]{2,10})\s([a-zA-Z]{2,10})$/;

    if (usernameRegex.test(username)) {
      console.log('Username is valid.');
      await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, requestId: uuidv4() }),
      }).then((res) => {
        if (res.ok) {
          console.log('Profile updated.');
          setError(null);
          inputRef.current = username;
        } else {
          setError('Profile update failed.');
        }
      });
    } else {
      setError('Username must be 4-20 characters long.');
    }
  };

  if (status === 'loading') {
    return (
      <section className='mt-8'>
        <h1 className='mb-4 text-center text-primary text-4xl'>Profile</h1>
        <p className='text-center'>Loading...</p>
      </section>
    );
  }

  if (status === 'unauthenticated') {
    return redirect('/login');
  }

  return (
    <section className='mt-8'>
      <h1 className='mb-4 text-center text-primary text-4xl'>Profile</h1>
      <div className='max-w-md mx-auto'>
        <div className='flex gap-2 items-center'>
          <div>
            <div className='p-2 rounded-lg relative'>
              <Image
                className='w-full h-full mb-2'
                src={image}
                alt='profile image'
                width={250}
                height={250}
              />
              <button type='button'>Edit</button>
            </div>
          </div>

          <form className='grow' onSubmit={handleProfileInfoUpdate}>
            <input
              ref={inputRef}
              type='text'
              placeholder='First and lastname'
              value={username}
              onChange={(e) => handleUsernameChange(e)}
            />
            <input type='text' disabled value={data?.user?.email} />
            <button disabled={username == inputRef.current} type='submit'>
              Save
            </button>
            {error && <p className='text-red-400'>{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
