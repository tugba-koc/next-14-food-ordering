import Image from 'next/image';
import React from 'react';
import Right from '../icons/Right';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold'>
          Everything <br /> is better with <br /> a&nbsp;
          <span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-4 text-gray-500 text-sm'>
          Pizza is missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className='flex gap-4 items-center text-sm'>
          <button className='bg-primary uppercase items-center text-white px-4 py-2 rounded-full flex gap-2'>
            Order now
            <Right />
          </button>
          <button className='flex items-center gap-2 text-gray-600 font-semibold'>
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className='relative'>
        <Image
          src='/pizza.png'
          alt='Pizza'
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
    </section>
  );
};

export default Hero;
