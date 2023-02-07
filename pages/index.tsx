import React from 'react';
import Image from 'next/image';
import { IoPaw, IoPawOutline } from 'react-icons/io5';
import Details from '../components/Details';
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';
import Slider from '../components/Slider';
import { BsCart4 } from 'react-icons/bs';
import Footer from '../components/Footer';

export default function HomePage() {
  const categorias = [
    'Perros',
    'Gatos',
    'Peces',
    'Roedores',
    'Reptiles',
    'Placeholder',
  ];

  return (
    <>
      <Details />
      <NavBar />
      <MenuBar />

      <Slider />

      {/* Categorías */}
      <div className="w-full px-[140px] py-16">
        <h3 className="font-montserrat font-light text-secondary-500">
          Lorem Ipsum dolor sit amet.
        </h3>
        <h1 className="text-primary-300 font-montserrat font-bold">
          UNA GRAN VARIEDAD DE CATEGORÍAS
        </h1>

        <div className="py-10 grid grid-cols-6 gap-4 items-center justify-stretch">
          {categorias.map((categoria) => {
            return (
              <div
                key={categoria}
                className="w-full flex-col justify-items-center"
              >
                <div className="flex justify-center">
                  <Image
                    src={'/dogIcon.png'}
                    alt={'Dog Icon'}
                    width={120}
                    height={120}
                  />
                </div>
                <h3 className="font-montserrat py-6 font-light text-center text-secondary-500">
                  {categoria}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* Productos Destacados */}
      <div className="w-full px-[140px]">
        <h3 className="font-montserrat font-light text-secondary-500">
          Lorem Ipsum dolor sit amet.
        </h3>
        <h1 className="text-primary-300 font-montserrat font-bold">
          PRODUCTOS DESTACADOS
        </h1>

        <div className="py-10 grid grid-cols-5 gird-rows-2 gap-4 items-center justify-center">
          <div className="col-span-2 row-span-2">
            <div className="flex">
              <Image src={'/gato.png'} alt={'Gato'} width={440} height={708} />
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banners */}
      <div className="px-[140px] py-16 grid grid-cols-2 justify-items-center">
        <div className="w-full h-[220px] bg-cover bg-[url('/bannerOne.png')] col-span-1"></div>
        <div className="w-full h-[220px] bg-cover bg-[url('/bannerTwo.png')] col-span-1"></div>
      </div>

      {/* Últimos productos */}
      <div className="w-full px-[140px] py-2">
        <h3 className="font-montserrat font-light text-secondary-500">
          Lorem Ipsum dolor sit amet.
        </h3>
        <h1 className="text-primary-300 font-montserrat font-bold">
          ÚLTIMOS PRODUCTOS
        </h1>

        <div className="p-12 grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex-col justify-items-center">
              <div className="flex justify-center">
                <Image
                  src={'/puppy.png'}
                  alt={'Puppy'}
                  width={144}
                  height={200}
                />
              </div>
              <div className="py-4">
                <h5 className="font-montserrat font-medium text-sm">
                  1st Choice Puppy Chiot
                </h5>
                <div className="flex gap-1">
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPaw className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                  <IoPawOutline className="text-secondary-300" />
                </div>
                <p className="font-montserrat font-light text-sm">$9.99</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                  <BsCart4 className="inline-block" />
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banners */}
      <div className="px-[140px] py-16 grid grid-cols-1 justify-items-center">
        <div className="w-full h-[220px] bg-cover bg-[url('/bannerThree.png')] col-span-1"></div>
      </div>

      {/* Últimos Productos */}
      <div className="w-full px-[140px]">
        <h3 className="font-montserrat font-light text-secondary-500">
          Lorem Ipsum dolor sit amet.
        </h3>
        <h1 className="text-primary-300 font-montserrat font-bold">
          PRODUCTOS DESTACADOS
        </h1>

        <div className="pb-12 grid grid-cols-5 grid-rows-2 justify-between">
          <div className="col-span-3 row-span-2">
            <div className="py-10 grid grid-cols-3 gird-rows-2 gap-4 items-center justify-center">
              <div className="col-span-1">
                <div className="w-full flex-col justify-items-center">
                  <div className="flex justify-center">
                    <Image
                      src={'/puppy.png'}
                      alt={'Puppy'}
                      width={144}
                      height={200}
                    />
                  </div>
                  <div className="py-4">
                    <h5 className="font-montserrat font-medium text-sm">
                      1st Choice Puppy Chiot
                    </h5>
                    <div className="flex gap-1">
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                    </div>
                    <p className="font-montserrat font-light text-sm">$9.99</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                      <BsCart4 className="inline-block" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full flex-col justify-items-center">
                  <div className="flex justify-center">
                    <Image
                      src={'/puppy.png'}
                      alt={'Puppy'}
                      width={144}
                      height={200}
                    />
                  </div>
                  <div className="py-4">
                    <h5 className="font-montserrat font-medium text-sm">
                      1st Choice Puppy Chiot
                    </h5>
                    <div className="flex gap-1">
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                    </div>
                    <p className="font-montserrat font-light text-sm">$9.99</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                      <BsCart4 className="inline-block" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full flex-col justify-items-center">
                  <div className="flex justify-center">
                    <Image
                      src={'/puppy.png'}
                      alt={'Puppy'}
                      width={144}
                      height={200}
                    />
                  </div>
                  <div className="py-4">
                    <h5 className="font-montserrat font-medium text-sm">
                      1st Choice Puppy Chiot
                    </h5>
                    <div className="flex gap-1">
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                    </div>
                    <p className="font-montserrat font-light text-sm">$9.99</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                      <BsCart4 className="inline-block" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full flex-col justify-items-center">
                  <div className="flex justify-center">
                    <Image
                      src={'/puppy.png'}
                      alt={'Puppy'}
                      width={144}
                      height={200}
                    />
                  </div>
                  <div className="py-4">
                    <h5 className="font-montserrat font-medium text-sm">
                      1st Choice Puppy Chiot
                    </h5>
                    <div className="flex gap-1">
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                    </div>
                    <p className="font-montserrat font-light text-sm">$9.99</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                      <BsCart4 className="inline-block" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full flex-col justify-items-center">
                  <div className="flex justify-center">
                    <Image
                      src={'/puppy.png'}
                      alt={'Puppy'}
                      width={144}
                      height={200}
                    />
                  </div>
                  <div className="py-4">
                    <h5 className="font-montserrat font-medium text-sm">
                      1st Choice Puppy Chiot
                    </h5>
                    <div className="flex gap-1">
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                    </div>
                    <p className="font-montserrat font-light text-sm">$9.99</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                      <BsCart4 className="inline-block" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full flex-col justify-items-center">
                  <div className="flex justify-center">
                    <Image
                      src={'/puppy.png'}
                      alt={'Puppy'}
                      width={144}
                      height={200}
                    />
                  </div>
                  <div className="py-4">
                    <h5 className="font-montserrat font-medium text-sm">
                      1st Choice Puppy Chiot
                    </h5>
                    <div className="flex gap-1">
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPaw className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                      <IoPawOutline className="text-secondary-300" />
                    </div>
                    <p className="font-montserrat font-light text-sm">$9.99</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <button className="flex justify-center items-center gap-2 w-[110px] h-[24px] rounded-[5px] bg-primary-300 text-center text-white font-montserrat font-medium text-sm">
                      <BsCart4 className="inline-block" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-2">
            <div className="flex justify-end">
              <Image src={'/gato.png'} alt={'Gato'} width={440} height={708} />
            </div>
          </div>
        </div>
      </div>

      {/* Nuestros servicios */}
      <div className="w-full px-[140px] py-8">
        <h3 className="font-montserrat font-light text-secondary-500">
          Lorem Ipsum dolor sit amet.
        </h3>
        <h1 className="text-primary-300 font-montserrat font-bold">
          NUESTROS SERVICIOS
        </h1>
        <p className="font-montserrat py-2.5 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
          viverra fames sed.
        </p>

        <div className="w-full py-10 grid grid-cols-3 grid-rows-2">
          <div className="col-span-1">
            <div className="w-[90%] py-2 flex-col justify-items-center">
              <div className="flex justify-left">
                <Image
                  src={'/dogIcon.png'}
                  alt={'Dog Icon'}
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="font-montserrat pt-6 font-semibold text-left text-black">
                Peluquería
              </h3>
              <p className="font-montserrat pt-1 font-light text-left text-sm text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                unde soluta iusto? Doloribus quo, pariatur tempora voluptate
                aliquid sit et, autem est voluptatum illum hic placeat corrupti
                officia, debitis vitae.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-[90%] py-2 flex-col justify-items-center">
              <div className="flex justify-left">
                <Image
                  src={'/dogIcon.png'}
                  alt={'Dog Icon'}
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="font-montserrat pt-6 font-semibold text-left text-black">
                Odontología
              </h3>
              <p className="font-montserrat pt-1 font-light text-left text-sm text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                unde soluta iusto? Doloribus quo, pariatur tempora voluptate
                aliquid sit et, autem est voluptatum illum hic placeat corrupti
                officia, debitis vitae.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-[90%] py-2 flex-col justify-items-center">
              <div className="flex justify-left">
                <Image
                  src={'/dogIcon.png'}
                  alt={'Dog Icon'}
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="font-montserrat pt-6 font-semibold text-left text-black">
                Veterinario
              </h3>
              <p className="font-montserrat pt-1 font-light text-left text-sm text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                unde soluta iusto? Doloribus quo, pariatur tempora voluptate
                aliquid sit et, autem est voluptatum illum hic placeat corrupti
                officia, debitis vitae.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-[90%] py-2 flex-col justify-items-center">
              <div className="flex justify-left">
                <Image
                  src={'/dogIcon.png'}
                  alt={'Dog Icon'}
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="font-montserrat pt-6 font-semibold text-left text-black">
                Entrenamiento
              </h3>
              <p className="font-montserrat pt-1 font-light text-left text-sm text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                unde soluta iusto? Doloribus quo, pariatur tempora voluptate
                aliquid sit et, autem est voluptatum illum hic placeat corrupti
                officia, debitis vitae.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-[90%] py-2 flex-col justify-items-center">
              <div className="flex justify-left">
                <Image
                  src={'/dogIcon.png'}
                  alt={'Dog Icon'}
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="font-montserrat pt-6 font-semibold text-left text-black">
                Psicología Canina
              </h3>
              <p className="font-montserrat pt-1 font-light text-left text-sm text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                unde soluta iusto? Doloribus quo, pariatur tempora voluptate
                aliquid sit et, autem est voluptatum illum hic placeat corrupti
                officia, debitis vitae.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-[90%] py-2 flex-col justify-items-center">
              <div className="flex justify-left">
                <Image
                  src={'/dogIcon.png'}
                  alt={'Dog Icon'}
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="font-montserrat pt-6 font-semibold text-left text-black">
                Fiestas de cumpleaños
              </h3>
              <p className="font-montserrat pt-1 font-light text-left text-sm text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                unde soluta iusto? Doloribus quo, pariatur tempora voluptate
                aliquid sit et, autem est voluptatum illum hic placeat corrupti
                officia, debitis vitae.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mejores Marcas */}
      <div className="w-full px-[140px] pt-8 pb-24">
        <h3 className="font-montserrat font-light text-secondary-500">
          Lorem Ipsum dolor sit amet.
        </h3>
        <h1 className="text-primary-300 font-montserrat font-bold">
          TRABAJAMOS CON LAS MEJORES MARCAS
        </h1>

        <div className="w-full grid grid-cols-3 py-4 gap-x-2.5">
          <div className="col-span-1">
            <p className="font-montserrat font-light text-sm py-2.5 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit
              ut viverra fames sed.
            </p>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4 justify-items-center gap-x-2 5">
              <Image
                src={'/choiceLogo.png'}
                alt={'Logo Choice'}
                width={100}
                height={100}
              />
              <Image
                src={'/choiceLogo.png'}
                alt={'Logo Choice'}
                width={100}
                height={100}
              />
              <Image
                src={'/choiceLogo.png'}
                alt={'Logo Choice'}
                width={100}
                height={100}
              />
              <Image
                src={'/choiceLogo.png'}
                alt={'Logo Choice'}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
