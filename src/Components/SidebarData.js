import React from 'react';
import {
  FaLink,
  FaFileUpload,
  FaAddressCard,
  FaSignInAlt,
} from 'react-icons/fa';
import { ImPriceTag } from 'react-icons/im';
// import LinkIcon from '@material-ui/icons/Link';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
// import LocalOfferIcon from '@material-ui/icons/LocalOffer';
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// import InputIcon from '@material-ui/icons/Input';

const color = '#6cdbeb';
const size = '2rem';

export const SidebarData = [
  {
    title: 'Url',
    icon: <FaLink color={color} fontSize={size} />,
    link: '/home',
  },
  {
    title: 'File',
    icon: <FaFileUpload color={color} fontSize={size} />,
    link: '/file',
  },
  {
    title: 'Pricing',
    icon: <ImPriceTag color={color} fontSize={size} />,
    link: '/pricing',
  },
  {
    title: 'About Us',
    icon: <FaAddressCard color={color} fontSize={size} />,
    link: '/about-us',
  },
  {
    title: 'Sign In',
    icon: <FaSignInAlt color={color} fontSize={size} />,
    link: '/sign-in',
  },
];

export default SidebarData;
