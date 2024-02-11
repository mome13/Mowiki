import { SiteHeader } from '@/components/layouts/site-header';
import { SiteFooter } from '@/components/layouts/site-footer';

interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <SiteHeader />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  );
}
