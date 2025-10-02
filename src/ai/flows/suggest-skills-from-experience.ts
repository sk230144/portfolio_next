// src/ai/flows/suggest-skills-from-experience.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting skills based on experience details.
 *
 * The flow takes company and role information as input and returns a list of suggested skills.
 * It exports:
 *   - suggestSkillsFromExperience: The main function to trigger the flow.
 *   - SuggestSkillsFromExperienceInput: The input type for the flow.
 *   - SuggestSkillsFromExperienceOutput: The output type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSkillsFromExperienceInputSchema = z.object({
  company: z.string().describe('The company where the experience was gained.'),
  role: z.string().describe('The role held during the experience.'),
});
export type SuggestSkillsFromExperienceInput = z.infer<typeof SuggestSkillsFromExperienceInputSchema>;

const SuggestSkillsFromExperienceOutputSchema = z.array(
  z.string().describe('A suggested skill based on the experience.')
);
export type SuggestSkillsFromExperienceOutput = z.infer<typeof SuggestSkillsFromExperienceOutputSchema>;

export async function suggestSkillsFromExperience(input: SuggestSkillsFromExperienceInput): Promise<SuggestSkillsFromExperienceOutput> {
  return suggestSkillsFromExperienceFlow(input);
}

const suggestSkillsFromExperiencePrompt = ai.definePrompt({
  name: 'suggestSkillsFromExperiencePrompt',
  input: {schema: SuggestSkillsFromExperienceInputSchema},
  output: {schema: SuggestSkillsFromExperienceOutputSchema},
  prompt: `You are an AI assistant that suggests relevant skills based on a person's work experience.

  Given the company and role, suggest a list of skills that the person likely used.
  Return the skills as a JSON array of strings.

  Company: {{{company}}}
  Role: {{{role}}}

  Skills:`,
});

const suggestSkillsFromExperienceFlow = ai.defineFlow(
  {
    name: 'suggestSkillsFromExperienceFlow',
    inputSchema: SuggestSkillsFromExperienceInputSchema,
    outputSchema: SuggestSkillsFromExperienceOutputSchema,
  },
  async input => {
    const {output} = await suggestSkillsFromExperiencePrompt(input);
    return {
      ...output!,
      progress: 'Suggested skills based on the provided company and role information.',
    };
  }
);
