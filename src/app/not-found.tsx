import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center text-center">
      <div>
        <h1 className="text-8xl font-extrabold tracking-tighter text-primary">404</h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
