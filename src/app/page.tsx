import { getProfile } from '@/lib/portfolio-service';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import type { Profile } from '@/lib/types';

export default async function Home() {
  const profile: Profile = await getProfile();

  if (!profile) {
    return <div>Profile not found.</div>;
  }
  
  const socialLinks = [
    { name: 'GitHub', url: profile.links.github, icon: <Github /> },
    { name: 'LinkedIn', url: profile.links.linkedin, icon: <Icons.linkedin /> },
    { name: 'LeetCode', url: profile.links.leetcode, icon: <Icons.leetcode /> },
  ];

  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
      <div className="max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          {profile.title.split('|')[0].trim()}
        </span>
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-accent-foreground sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          {profile.about} Based in {profile.location}.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <Button asChild variant="ghost" size="icon" key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
