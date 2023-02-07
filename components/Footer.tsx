import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { SlSocialInstagram } from 'react-icons/sl';

export default function Footer() {
  return (
    <>
      <div className="h-[200px] w-[96%] px-[70px] grid grid-cols-4 justify-items-start bg-inherit">
        <div className="w-[240px] items-start justify-center gap-y-2">
          <div className="w-full flex-col items-start gap-x-2">
            <h1 className="text-primary-300 font-montserrat font-semibold text-lg pb-5">
              Sobre nosotros
            </h1>
            <p className="font-montserrat text-sm text-secondary-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>
        </div>
        <div className="w-[240px] items-start justify-center gap-y-2">
          <div className="w-full flex-col items-center gap-x-2">
            <h1 className="text-primary-300 font-montserrat font-semibold text-lg pb-5">
              Mi cuenta
            </h1>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Información Personal
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Direcciones
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Mascotas
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Órdenes
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Agenda
            </p>
          </div>
        </div>
        <div className="w-[240px] items-start justify-center gap-y-2">
          <div className="w-full flex-col items-center gap-x-2">
            <h1 className="text-primary-300 font-montserrat font-semibold text-lg pb-5">
              Información
            </h1>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Formulario de contacto
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Preguntas frecuentes
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Términos y condiciones
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Políticas de privacidad
            </p>
          </div>
        </div>
        <div className="w-[240px] items-start justify-center gap-y-2">
          <div className="w-full flex-col items-center gap-x-2">
            <h1 className="text-primary-300 font-montserrat font-semibold text-lg pb-5">
              Atención al cliente
            </h1>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Bello Monte, calle XXXX, local 1
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              (0212) 575 54 12
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              soporte@maxipet.com
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              Lunes a Viernes
            </p>
            <p className="pb-2.5 font-montserrat text-sm text-secondary-500">
              9:00 a.m. - 5:00 p.m.
            </p>
            <div className="flex gap-x-2 pb-2.5.5 font-montserrat text-sm text-secondary-500">
              <SlSocialInstagram style={{ color: 'text-secondary-500' }} />
              <SiTwitter style={{ color: 'text-secondary-500' }} />
              <FaFacebookF style={{ color: 'text-secondary-500' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="pt-10 w-full grid grid-cols-2 px-[100px]">
        <div className="flex justify-start">
          <Image
            src={'/dogHouse.png'}
            alt={'Dog House Icon'}
            width={60}
            height={60}
          />
        </div>
        <div className="flex justify-end">
          <Image src={'/tree.png'} alt={'Tree Icon'} width={60} height={60} />
        </div>
      </div>

      {/* Details */}
      <div className="w-full h-[36px] px-8 grid justify-items-center bg-primary-300">
        <div className="flex items-center gap-x-2">
          <p className="font-montserrat text-white font-normal py-1">
            Copyright © 2021 Maxi Pet. Todos los Derechos Reservados.
            Desarrollado por Avila Tek{' '}
          </p>
          <Image
            src={'/avilaIcon.png'}
            alt={'Avila Icon'}
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
}
