import { CiLocationOn } from 'react-icons/ci';
import { RiArrowDownSLine } from 'react-icons/ri';
import { SlSocialInstagram } from 'react-icons/sl';
import { SiTwitter } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';

export default function Details() {
  return (
    <div className="w-full h-[26px] px-8 grid justify-items-end bg-primary-300">
      <div className="flex items-center gap-x-2">
        {/* Location Icon */}
        <CiLocationOn style={{ color: 'white' }} />
        <h1 className="text-white font-montserrat text-xs">Bello Monte</h1>
        <RiArrowDownSLine style={{ color: 'white' }} />

        {/* Social Icons */}
        <SlSocialInstagram style={{ color: 'white' }} />
        <SiTwitter style={{ color: 'white' }} />
        <FaFacebookF style={{ color: 'white' }} />
      </div>
    </div>
  );
}
