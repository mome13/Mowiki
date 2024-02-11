import Link from 'next/link';
import { siteConfig } from '@/config/site';
import MainNav from '@/components/layouts/main-nav';

interface SiteHeaderProps {}

export function SiteHeader({}: SiteHeaderProps) {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center'>
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
}
