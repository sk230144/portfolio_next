import type { Experience } from "@/lib/types";
import { Briefcase, Link as LinkIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type TimelineProps = {
  items: Experience[];
};

function formatDate(dateString: string | null) {
  if (!dateString) return 'Present';
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* The vertical line */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>

      {items.map((item, index) => (
        <div key={index} className="relative flex items-start gap-6 pl-6">
          {/* Dot and Icon */}
          <div className="absolute left-6 top-1.5 flex h-10 w-10 -translate-x-1/2 items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background ring-8 ring-background">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-5 w-5" />
                </div>
            </div>
          </div>

          <div className="pt-2 pl-10 flex-1">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <CardTitle className="text-xl font-bold">{item.role}</CardTitle>
                    <div className="text-sm text-muted-foreground font-mono">
                        {formatDate(item.start)} - {formatDate(item.end)}
                    </div>
                </div>
                <CardDescription className="font-medium">{item.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                {item.links && item.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.links.map((link, i) => (
                        <a href={link} key={i} target="_blank" rel="noopener noreferrer">
                            <Badge variant="secondary">
                                <LinkIcon className="mr-1 h-3 w-3" />
                                View Project
                            </Badge>
                        </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
