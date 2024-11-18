import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialItem } from '../types';

export const socials: SocialItem[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: FaFacebook,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/',
    icon: FaXTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
];
