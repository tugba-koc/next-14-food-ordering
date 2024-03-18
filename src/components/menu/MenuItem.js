import Image from 'next/image';

const MenuItem = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25'>
      <Image
        className='mx-auto'
        src='/pizza.png'
        alt='pizza'
        width={200}
        height={200}
      />
      <h4 className='font-semibold text-xl my-2'>Pepperoni Pizza</h4>
      <p className='text-gray-500 text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cum
        natus commodi.
      </p>
      <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
