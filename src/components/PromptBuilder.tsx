import { useState } from 'react';
import axios from 'axios';

const ALL_FEATURES = [
  'Authentication',
  'CRUD',
  'Chatbot',
  'Notifications',
  'Analytics',
  'Payments',
  'SocialSharing',
  'OfflineMode',
  'Localization',
  'Ads',
  'MediaUploads',
  'CustomLogic',
];

// Update API URL to use the correct format
const API_URL = '/api/optimizePrompt';

export default function PromptBuilder() {
  const [idea, setIdea] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const toggleFeature = (feat: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };

  const generate = async () => {
    if (!idea.trim()) {
      setError('Please describe your app idea.');
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const res = await axios.post('/api/optimizePrompt', {
  ideaText: idea,
  selectedFeatures,
});
      setPrompt(res.data.optimizedPrompt);
    } catch (e: any) {
      console.error(e);
      setError('Failed to generate prompt. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {error && <div className="mb-2 text-red-600">{error}</div>}

      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your app idea…"
        className="w-full h-32 p-2 border rounded"
      />

      <div className="grid grid-cols-3 gap-2 mt-4">
        {ALL_FEATURES.map((feat) => (
          <label key={feat} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedFeatures.includes(feat)}
              onChange={() => toggleFeature(feat)}
              className="mr-2"
            />
            {feat}
          </label>
        ))}
      </div>

      <button
        onClick={generate}
        disabled={loading}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? 'Generating…' : 'Generate Prompt'}
      </button>

      {prompt && (
        <textarea
          readOnly
          value={prompt}
          className="w-full h-32 p-2 border rounded mt-4 bg-gray-100"
        />
      )}
    </div>
  );
}