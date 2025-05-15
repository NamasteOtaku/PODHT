-import process from 'process/browser';
 import { HfInference } from '@huggingface/inference';
 import QuickLRU from '@alloc/quick-lru';

-const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_HUB_API_TOKEN);
+// Validate and initialize Hugging Face client
+const hfToken = import.meta.env.VITE_HUGGINGFACE_HUB_API_TOKEN;
+if (!hfToken) {
+  throw new Error('Missing VITE_HUGGINGFACE_HUB_API_TOKEN in .env');
+}
+const hf = new HfInference(hfToken, {
+  requestTimeout: 10000,    // 10s timeout
+  maxRetries: 2,            // retry twice on failure
+});

 // Improved cache key includes options
 const cache = new QuickLRU<string, string>({ maxSize: 100 });

-export async function optimizePrompt(
-  prompt: string,
-  options: OptimizePromptOptions = {}
-): Promise<string> {
-  const cacheKey = `${prompt}-${MAX_LENGTH}`;
+export async function optimizePrompt(
+  prompt: string,
+  { maxRetries = 2, timeout = 10000 }: OptimizePromptOptions = {}
+): Promise<string> {
+  const cacheKey = `${prompt}-${MAX_LENGTH}-${maxRetries}-${timeout}`;

   const cachedResult = cache.get(cacheKey);
   if (cachedResult) return cachedResult;

   try {
-    const result = await hf.summarization({
-      model: MODEL_ID,
-      inputs: prompt,
-      parameters: {
-        max_length: MAX_LENGTH,
-        min_length: MIN_LENGTH,
-        do_sample: false,
-      },
-    });
+    const result = await hf.summarization({
+      model: MODEL_ID,
+      inputs: prompt,
+      parameters: {
+        max_length: MAX_LENGTH,
+        min_length: MIN_LENGTH,
+        do_sample: false,
+      },
+      timeout,
+      retries: maxRetries,
+    });

     cache.set(cacheKey, result.summary_text);
     return result.summary_text;
   } catch (error) {
     console.error('Error optimizing prompt:', error);
     throw new Error('Failed to optimize prompt');
   }
 }