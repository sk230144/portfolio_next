import { profileData, skillsData, experienceData, projectsData } from './data';
import type { Profile, Skill, Experience, Project } from './types';

// Simulate a network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProfile(): Promise<Profile> {
  await delay(100); // Simulate fetching
  return profileData;
}

export async function getSkills(): Promise<Skill[]> {
  await delay(100);
  return skillsData;
}

export async function getExperience(): Promise<Experience[]> {
  await delay(100);
  return experienceData;
}

export async function getProjects(): Promise<Project[]> {
  await delay(100);
  return projectsData;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  await delay(100);
  return projectsData.find(p => p.slug === slug);
}
