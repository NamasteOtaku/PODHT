import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { optimizePrompt } from '../services/huggingface';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// Rate limiting
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
};

let requestCounts = new Map<string, { count: number; timestamp: number }>();

app.use((req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const windowStart = now - rateLimit.windowMs;

  // Clean up old entries
  for (const [key, value] of requestCounts.entries()) {
    if (value.timestamp < windowStart) {
      requestCounts.delete(key);
    }
  }

  // Check rate limit
  const requests = requestCounts.get(ip);
  if (requests) {
    if (requests.timestamp < windowStart) {
      requestCounts.set(ip, { count: 1, timestamp: now });
    } else if (requests.count >= rateLimit.max) {
      return res.status(429).json({ error: 'Too many requests' });
    } else {
      requests.count++;
    }
  } else {
    requestCounts.set(ip, { count: 1, timestamp: now });
  }

  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Prompt optimization endpoint
app.post('/api/optimizePrompt', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const optimizedPrompt = await optimizePrompt(prompt);
    res.json({ optimizedPrompt });
  } catch (error) {
    console.error('Error in /api/optimizePrompt:', error);
    res.status(500).json({ error: 'Failed to optimize prompt' });
  }
});

// Global error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});