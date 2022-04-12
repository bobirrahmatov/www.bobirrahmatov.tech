import { IconType } from 'react-icons/lib';
import {
  IoHomeOutline,
  IoPencil,
  IoCodeSlash,
  IoBookmarksOutline, 
  IoTerminalOutline, 
  IoBookOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
type BaseItem = {
  title: string;
};

export type PageItem = BaseItem & {
  href: string;
  icon: IconType;
};

export type SearchItemsType = {
  pages: PageItem[];
};

export const searchItems: SearchItemsType = {
  pages: [
    {
      title: 'Home',
      icon: IoHomeOutline,
      href: '/',
    },
    {
      title: 'Blog',
      icon: IoPencil, 
      href: '/blog',
    },
    {
      title: 'Projects',
      icon : IoCodeSlash,
      href: '/projects',
    },
    {
      title: 'Uses',
      icon: IoTerminalOutline,
      href: '/uses',
    },
    {
      title: 'Gear',
      icon: IoSettingsOutline,
      href: '/gear',
    },
    {
      title: 'Bookmarks',
      icon: IoBookmarksOutline, 
      href: '/bookmarks',
    },
    {
      title: 'Books',
      icon: IoBookOutline,
      href: '/books',
    },
  ],
};
