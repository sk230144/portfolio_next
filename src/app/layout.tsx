import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { getProfile } from '@/lib/portfolio-service';
import { JsonLd, getPersonSchema } from '@/components/json-ld';
import type { Profile } from '@/lib/types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://saurabh-tiwari-portfolio.com';

export async function generateMetadata(): Promise<Metadata> {
  const profile: Profile = await getProfile();

  const APP_NAME = `${profile.name}'s Portfolio`;
  const APP_DESCRIPTION = profile.about;

  return {
    title: {
      default: APP_NAME,
      template: `%s | ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    applicationName: APP_NAME,
    appleWebApp: {
      capable: true,
      title: APP_NAME,
      statusBarStyle: 'default',
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      url: BASE_URL,
      title: APP_NAME,
      description: APP_DESCRIPTION,
      images: {
        url: `${BASE_URL}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: `${profile.name}'s Portfolio OG Image`,
      },
    },
    twitter: {
      creator: profile.links.twitter || '@saurabh',
      card: 'summary_large_image',
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0c101a" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await getProfile();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;700;800&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <JsonLd data={getPersonSchema(profile, BASE_URL)} />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header profile={profile} />
            <main className="flex-grow">{children}</main>
            <Footer profile={profile} />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
