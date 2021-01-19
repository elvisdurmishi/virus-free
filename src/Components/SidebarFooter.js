import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
const color = '#fff';
const size = '6rem';

export const SidebarFooter = [
  {
    description: 'Sign up now for unlimited file verification.',
    icon: <FaUserPlus color={color} fontSize={size} />,
    link: '/sign-up',
  },
];

export default SidebarFooter;
