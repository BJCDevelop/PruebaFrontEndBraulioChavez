import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { GiDogHouse } from 'react-icons/gi';
import { BiUser } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';

export default function NavBar() {
  return (
    <div className="h-[60px] px-20 grid justify-items-center bg-inherit">
      <div className="flex justify-between items-center w-full gap-x-2">
        {/* Logo */}
        <div className="relative w-full">
          <Image
            src={'/logoMaxiPet.png'}
            alt={'Logo Maxi Pet'}
            width={'170'}
            height={'46'}
          />
        </div>

        <div className="relative w-full text-secondary-200">
          <input
            type="text"
            placeholder="Buscador"
            className="w-full h-[33px] py-4 pl-4 pr-4 text-secondary-200 border-secondary-200 rounded-md outline-none font-montserrat"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#C8C2BE"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Menu Buttons */}
        <div className="relative w-full">
          <div className="flex justify-end items-center gap-x-2">
            <CiLocationOn style={{ color: 'text-black' }} />
            <GiDogHouse style={{ color: 'text-black' }} />
            <BiUser style={{ color: 'text-black' }} />
            <BsCart4 style={{ color: 'text-black' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
