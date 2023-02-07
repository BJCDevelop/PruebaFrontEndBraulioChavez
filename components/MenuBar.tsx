import Link from 'next/link';

export default function MenuBar() {
  return (
    <div className="max-w-full h-[30px] max-px-[168px] py-3 grid justify-items-center bg-inherit">
      <div className="flex items-center gap-x-[90px] text-secondary-600 font-montserrat font-medium">
        <Link href="/">Inicio</Link>
        <Link href="/">Comprar por marca</Link>
        <Link href="/">Comprar por mascota</Link>
        <Link href="/">Nuestros servicios</Link>
        <Link href="/">Promociones</Link>
        <Link href="/">Nosotros</Link>
      </div>
    </div>
  );
}
