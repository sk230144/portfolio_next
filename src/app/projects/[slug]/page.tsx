import { getProfile, getProjectBySlug, getProjects } from '@/lib/portfolio-service';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { JsonLd, getProjectSchema } from '@/components/json-ld';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://saurabh-tiwari-portfolio.com';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [
        {
          url: project.images[0]?.url || '',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }
  
  const profile = await getProfile();

  return (
    <>
    <JsonLd data={getProjectSchema(project, profile, BASE_URL)} />
    <div className="container max-w-5xl py-12">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>
      </header>

      <div className="mb-8">
        <Carousel className="w-full">
            <CarouselContent>
                {project.images.map((img, index) => (
                    <CarouselItem key={index}>
                        <div className="aspect-video w-full overflow-hidden rounded-lg border">
                            <Image
                                src={img.url}
                                alt={`${project.title} - screenshot ${index + 1}`}
                                width={1200}
                                height={675}
                                data-ai-hint={img.hint}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {project.images.length > 1 && (
                <>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-16" />
                </>
            )}
        </Carousel>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <aside className="md:col-span-1">
          <div className="sticky top-24">
            <h2 className="font-headline text-xl font-semibold">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <h2 className="font-headline mt-8 text-xl font-semibold">Links</h2>
            <div className="mt-4 space-y-2">
              {project.live && (
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.repo && (
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repository
                  </a>
                </Button>
              )}
            </div>
          </div>
        </aside>

        <article className="md:col-span-2">
          <h2 className="font-headline text-2xl font-semibold">Key Highlights</h2>
          <ul className="mt-4 space-y-4">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
    </>
  );
}
