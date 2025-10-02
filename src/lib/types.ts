export type Profile = {
  name: string;
  title: string;
  location: string;
  about: string;
  email: string;
  phone: string;
  links: {
    linkedin: string;
    github: string;
    portfolio: string;
    leetcode: string;
    twitter?: string;
  };
  resumeUrl: string;
};

export type Skill = {
  name: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string | null;
  bullets: string[];
  links?: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  tech: string[];
  repo?: string;
  live?: string;
  images: { id: string; url: string; hint: string }[];
  highlights: string[];
};
