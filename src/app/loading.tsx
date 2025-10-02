import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
      <div className="max-w-3xl text-center space-y-6">
        <Skeleton className="h-8 w-48 mx-auto" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-12 w-full max-w-lg mx-auto" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-12 w-36" />
          <Skeleton className="h-12 w-36" />
        </div>
      </div>
    </div>
  );
}
