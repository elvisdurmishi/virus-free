import React from 'react';
import {
  FaLink,
  FaFileUpload,
  FaAddressCard,
  FaSignInAlt,
} from 'react-icons/fa';

const color = '#6cdbeb';
const size = '2rem';

export const SidebarData = [
  {
    id: 1,
    title: 'Url',
    icon: <FaLink color={color} fontSize={size} />,
    link: '/home',
  },
  {
    id: 2,
    title: 'File',
    icon: <FaFileUpload color={color} fontSize={size} />,
    link: '/file',
  },
];

export default SidebarData;
