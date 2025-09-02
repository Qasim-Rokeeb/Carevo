'use server';

/**
 * @fileOverview A flow that summarizes health information based on user questions.
 *
 * - summarizeHealthInfo - A function that summarizes health information based on user questions.
 * - SummarizeHealthInfoInput - The input type for the summarizeHealthInfo function.
 * - SummarizeHealthInfoOutput - The return type for the summarizeHealthInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeHealthInfoInputSchema = z.object({
  question: z.string().describe('The user question about health information.'),
  healthInfo: z.string().describe('Detailed health information to summarize.'),
});
export type SummarizeHealthInfoInput = z.infer<typeof SummarizeHealthInfoInputSchema>;

const SummarizeHealthInfoOutputSchema = z.object({
  summary: z.string().describe('A summarized answer to the user question.'),
});
export type SummarizeHealthInfoOutput = z.infer<typeof SummarizeHealthInfoOutputSchema>;

export async function summarizeHealthInfo(input: SummarizeHealthInfoInput): Promise<SummarizeHealthInfoOutput> {
  return summarizeHealthInfoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeHealthInfoPrompt',
  input: {schema: SummarizeHealthInfoInputSchema},
  output: {schema: SummarizeHealthInfoOutputSchema},
  prompt: `You are a helpful AI assistant that summarizes health information based on user questions.

  User Question: {{{question}}}
  Health Information: {{{healthInfo}}}

  Provide a concise and informative summary that directly answers the user's question, keep the summary to under 200 words.`,
});

const summarizeHealthInfoFlow = ai.defineFlow(
  {
    name: 'summarizeHealthInfoFlow',
    inputSchema: SummarizeHealthInfoInputSchema,
    outputSchema: SummarizeHealthInfoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
