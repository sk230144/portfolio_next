import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="container max-w-4xl py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          Admin Panel
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Manage your portfolio content.
        </p>
      </header>

      <Card className="text-center">
        <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
            </div>
          <CardTitle>Authentication Required</CardTitle>
          <CardDescription>
            This area is restricted. Full CRUD functionality and authentication can be implemented here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            To build out this section, you would typically integrate Firebase Authentication
            and create forms to manage the `projects`, `experience`, and `skills` collections in Firestore.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
