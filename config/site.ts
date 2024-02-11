import type { MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Mowiki',
  description: 'a video suggestion app',
  url: 'https://mowiki.com/',
  ogImage: '',
  mainNav: [
    {
      title: 'Movies',
      items: [
        {
          title: 'Popular',
          href: '/movies',
          description: 'All the popular movies.',
          items: [],
        },
        {
          title: 'Now Playing',
          href: '/movies/now-playing',
          description: 'Movies that are currently on the air.',
          items: [],
        },
        {
          title: 'Upcoming',
          href: '/movies/up-coming',
          description: 'Movies are in production phase.',
          items: [],
        },
        {
          title: 'Top Rated',
          href: '/movies/top-rated',
          description: 'Top rated movies.',
          items: [],
        },
      ],
    },
    {
      title: 'TV Shows',
      items:[
        {
          title: 'Popular',
          href: '/tv',
          description: 'All the popular Tv Shows.',
          items: [],
        },
        {
          title: 'Airing Today',
          href: '/tv/airing-today',
          description: 'Tv shows that are on the air :).',
          items: [],
        },
        {
          title: 'On TV',
          href: '/tv/on-tv',
          description: 'On television Shows.',
          items: [],
        },
        {
          title: 'Top Rated',
          href: '/tv/top-rated',
          description: 'Top rated TV shows.',
          items: [],
        },
      ]
    },
    {
      title: 'People',
      items:[
        {
          title: 'Popular People',
          href: '/person',
          description: 'All the popular people.',
          items: [],
        },
      ]
    }
  ] satisfies MainNavItem[],
  links: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/mome13/Mowiki',
  },
};
