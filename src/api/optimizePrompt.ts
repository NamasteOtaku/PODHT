// api/optimizePrompt.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { optimizePrompt } from '../src/services/huggingface';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { ideaText, selectedFeatures } = req.body;
  const fullPrompt = `Idea: ${ideaText}\nFeatures: ${selectedFeatures.join(', ')}`;
  const optimizedPrompt = await optimizePrompt(fullPrompt);
  res.status(200).json({ optimizedPrompt });
}
