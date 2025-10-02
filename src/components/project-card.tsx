import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden transition-all group-hover:shadow-lg group-hover:-translate-y-1">
        <CardHeader>
          <div className="aspect-video overflow-hidden rounded-md border">
            <Image
              src={project.images[0].url}
              alt={project.title}
              width={600}
              height={400}
              data-ai-hint={project.images[0].hint}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
          <CardDescription className="mt-2 line-clamp-3">{project.summary}</CardDescription>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline">+{project.tech.length - 4} more</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter>
            <div className="flex items-center text-sm font-medium text-primary">
                View Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

ProjectCard.Skeleton = function ProjectCardSkeleton() {
    return (
        <Card className="flex h-full flex-col">
            <CardHeader>
                <Skeleton className="aspect-video w-full rounded-md" />
            </CardHeader>
            <CardContent className="flex-grow">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="mt-3 h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-5/6" />
                <div className="mt-4 flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                </div>
            </CardContent>
            <CardFooter>
                 <Skeleton className="h-6 w-28" />
            </CardFooter>
        </Card>
    )
}
