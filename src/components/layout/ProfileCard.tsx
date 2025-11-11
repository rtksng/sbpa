import React from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  designation: string;
  experience: string;
  className?: string;
  showArrow?: boolean;
  variant?: 'primary' | 'secondary' | 'common';
  showBottomDropdown?: boolean;
}

const bgColorMap = {
  primary: 'bg-[#F6F6F6]',
  secondary: 'bg-[#E7F7FA]',
  common: 'bg-white',
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  name,
  designation,
  experience,
  className,
  showArrow = true,
  variant = 'primary',
  showBottomDropdown = false,
}) => {
  const bgColor = bgColorMap[variant];

  return (
    <div
      className={`relative flex items-center gap-4 px-2 py-3 h-[110px] shadow-sm hover:shadow-md transition-shadow border-b border-gray-100 ${bgColor} ${className || ''}`}
    >
      {/* Profile Image */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full overflow-hidden filter grayscale bg-white border-2 border-white shadow-md">
          <Image
            src={imageSrc}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        {showArrow && (
          <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 rounded-full p-0.5 ${bgColor}`}>
            <FaChevronDown className="text-[#272D57] text-[10px]" />
          </div>
        )}
      </div>

      {/* Profile Details - Column Layout */}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <h3 className="font-semibold text-[#272D57] text-sm leading-tight">
          {name}
        </h3>
        <p className="text-[#272D57] text-xs mt-0.5 leading-tight opacity-90">
          {designation}
        </p>
        <p className="text-[#5B7BAB] text-xs mt-1 font-semibold">
          {experience}
        </p>
      </div>

      {/* Bottom Center Dropdown Symbol */}
      {showBottomDropdown && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <div className="bg-[#F8A69C] rounded-full p-1.5 shadow-md">
            <FaChevronDown className="text-white text-xs" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;

