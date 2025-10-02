import { Skeleton } from "@/components/ui/skeleton";
import { ProjectCard } from "@/components/project-card";

export default function Loading() {
  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <Skeleton className="h-12 w-1/2 mx-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto mt-4" />
      </header>
      <div className="mb-8">
        <Skeleton className="h-8 w-1/3 mx-auto mb-4" />
        <div className="flex flex-wrap justify-center gap-2">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full" />
          ))}
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <ProjectCard.Skeleton key={i} />
        ))}
      </div>
    </div>
  );
}
