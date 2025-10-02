import type { Profile, Project } from '@/lib/types';

type JsonLdProps = {
  data: object;
};

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const getPersonSchema = (profile: Profile, baseUrl: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.name,
    "url": baseUrl,
    "sameAs": [
      profile.links.github,
      profile.links.linkedin,
      profile.links.leetcode,
    ],
    "jobTitle": profile.title,
    "email": profile.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": profile.location.split(',')[0],
      "addressCountry": profile.location.split(',')[1]
    }
  };
};

export const getProjectSchema = (project: Project, profile: Profile, baseUrl: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "applicationCategory": "DeveloperApplication",
    "description": project.summary,
    "operatingSystem": "Web",
    "author": {
      "@type": "Person",
      "name": profile.name,
      "url": baseUrl
    },
    ...(project.live && { "url": project.live }),
    ...(project.repo && { "codeRepository": project.repo }),
  };
};
