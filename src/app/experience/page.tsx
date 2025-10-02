import { getExperience } from '@/lib/portfolio-service';
import { Timeline } from '@/components/timeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description: "A timeline of Saurabh Tiwari's professional work experience.",
};

export default async function ExperiencePage() {
  const experiences = await getExperience();
  return (
    <div className="container max-w-4xl py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          Work Experience
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          My professional journey and key contributions.
        </p>
      </header>
      <Timeline items={experiences} />
    </div>
  );
}
