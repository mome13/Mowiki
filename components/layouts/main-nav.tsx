'use client';

import React from 'react';
import Link from 'next/link';
import type { MainNavItem } from '@/types';
import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

type NavigationProps = {
  items?: MainNavItem[];
};

export default function Navigation({ items }: NavigationProps) {
  return (
    <div className='hidden gap-6 lg:flex'>
      <Link
        aria-label='Home'
        href='/'
        className='hidden items-center space-x-2 lg:flex'
      >
        <Icons.logo className='h-6 w-6' aria-hidden='true' />
        <span className='hidden font-bold lg:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.map((item) =>
            item?.items ? (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className='h-auto capitalize'>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                    {item.items.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              item.href && (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), 'h-auto')}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
