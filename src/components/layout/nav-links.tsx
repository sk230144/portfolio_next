'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Admin' },
];

type NavLinksProps = {
  isMobile?: boolean;
  onLinkClick?: () => void;
};

export function NavLinks({ isMobile = false, onLinkClick }: NavLinksProps) {
  const pathname = usePathname();

  if (isMobile) {
    return (
      <>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              'transition-colors hover:text-foreground',
              pathname === link.href ? 'font-semibold text-foreground' : 'text-muted-foreground'
            )}
          >
            {link.label}
          </Link>
        ))}
      </>
    );
  }

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === link.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
