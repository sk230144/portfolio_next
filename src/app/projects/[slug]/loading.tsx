import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container max-w-5xl py-12">
      <header className="mb-8">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="mt-4 h-6 w-full" />
      </header>

      <div className="mb-8">
        <Skeleton className="aspect-video w-full rounded-lg" />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <aside className="md:col-span-1">
          <div className="space-y-8">
            <div>
              <Skeleton className="h-8 w-1/3" />
              <div className="mt-4 flex flex-wrap gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
            </div>
            <div>
              <Skeleton className="h-8 w-1/4" />
              <div className="mt-4 space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </aside>

        <article className="md:col-span-2">
          <Skeleton className="h-10 w-1/2" />
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <Skeleton className="mr-3 h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-full" />
            </div>
            <div className="flex items-start">
              <Skeleton className="mr-3 h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>
            <div className="flex items-start">
              <Skeleton className="mr-3 h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
