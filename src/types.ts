import { IconType } from 'react-icons';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Nav = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
  icon: IconType;
};
