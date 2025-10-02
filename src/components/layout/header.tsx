'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { Icons } from '@/components/icons';
import { useState } from 'react';
import type { Profile } from '@/lib/types';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Admin' },
];

type HeaderProps = {
  profile: Pick<Profile, 'name' | 'links'>
}

export function Header({ profile }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-headline font-bold">{profile.name}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="font-headline font-bold">{profile.name}</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                        "transition-colors hover:text-foreground",
                        pathname === link.href ? 'font-semibold text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <div className="md:hidden">
            <Link href="/" className="flex items-center space-x-2">
                <span className="font-headline font-bold">{profile.name}</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
