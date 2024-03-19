import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';
import HomeMenu from '../components/layout/HomeMenu';
import SectionHeader from '../components/layout/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeader subHeader={'Our Story'} mainHeader={'About Us'} />
        <div className='text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            magnam quas molestiae perferendis eaque quo eius asperiores? Quas
            tempora assumenda recusandae error reprehenderit, incidunt
            repudiandae cupiditate voluptatum modi eos magni?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nostrum odit voluptatum fugit obcaecati voluptas. Accusantium
            sapiente eligendi quidem eius numquam? Neque ipsa accusamus corrupti
            quod itaque exercitationem voluptate doloribus!
          </p>
        </div>
      </section>
      <section className='text-center my-8'>
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={'Contact Us'} />
        <div className='mt-8'>
          <a
            className='text-4xl underline text-gray-500'
            href='tel:+905394655730'
          >
            +90 539 465 57 30
          </a>
        </div>
      </section>
    </>
  );
}
