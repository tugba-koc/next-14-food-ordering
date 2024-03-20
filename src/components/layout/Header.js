'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  const session = useSession();
  const authenticationStatus = session.status;

  return (
    <header className='flex items-center justify-between'>
      <nav className='flex items-center gap-8 text-gray-400 font-semibold'>
        <Link className='text-primary font-semibold text-2xl' href='/'>
          ST PIZZA
        </Link>
        <Link href='/'>Home</Link>
        <Link href=''>Menu</Link>
        <Link href=''>About</Link>
        <Link href=''>Contact</Link>
      </nav>
      <nav className='flex items-center gap-4 font-semibold text-gray-500'>
        {authenticationStatus === 'authenticated' ? (
          <button
            onClick={() => signOut()}
            className='bg-primary rounded-full text-white px-4 py-2'
          >
            logout
          </button>
        ) : (
          <>
            <Link href='/login'>Login</Link>
            <Link
              href='/register'
              className='bg-primary rounded-full text-white px-4 py-2'
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
