'use client';

import { useEffect, useState, useMemo } from 'react';
import type { Project, Skill } from '@/lib/types';
import { getProjects, getSkills } from '@/lib/portfolio-service';
import { ProjectCard } from '@/components/project-card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [projectsData, skillsData] = await Promise.all([
          getProjects(),
          getSkills(),
        ]);
        setProjects(projectsData);
        setSkills(skillsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const toggleSkill = (skillName: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) {
      return projects;
    }
    return projects.filter((project) =>
      selectedSkills.every((skill) => project.tech.includes(skill))
    );
  }, [projects, selectedSkills]);

  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of projects I've worked on.
        </p>
      </header>

      <div className="mb-8">
        <h2 className="mb-4 text-center text-lg font-semibold">Filter by Technology</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {loading ? (
             [...Array(8)].map((_, i) => <Skeleton key={i} className="h-8 w-24 rounded-full" />)
          ) : (
            skills.map((skill) => (
                <button key={skill.name} onClick={() => toggleSkill(skill.name)}>
                    <Badge
                        variant={selectedSkills.includes(skill.name) ? 'default' : 'secondary'}
                        className="cursor-pointer px-4 py-2 text-sm"
                    >
                        {skill.name}
                    </Badge>
                </button>
            ))
          )}
        </div>
      </div>

      {loading ? (
         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => <ProjectCard.Skeleton key={i} />)}
         </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      )}

      {!loading && filteredProjects.length === 0 && (
        <div className="mt-16 text-center text-muted-foreground">
          <p>No projects match the selected filters.</p>
        </div>
      )}
    </div>
  );
}
