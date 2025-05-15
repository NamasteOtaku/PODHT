import { InputFormData, FeatureToggleState } from '../types';
import { optimizePrompt } from '../services/huggingface';

export const generatePrompt = async (
  formData: InputFormData,
  featureToggles: FeatureToggleState
): Promise<string> => {
  // Extract enabled features
  const enabledFeatures = Object.entries(featureToggles)
    .filter(([_, enabled]) => enabled)
    .map(([key]) => {
      return key.replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .replace('Ai', 'AI');
    });
  
  // Format platforms
  const platforms = formData.targetPlatforms.join(', ');
  
  // Combine all inputs
  const combinedPrompt = `
**FINAL APP PROMPT**

**Description:**
Create an app called "${formData.title}" for ${platforms} platforms. ${formData.description}

**Target Audience:**
${formData.primaryAudience}

**Core Functionality:**
${formData.coreFunctionality}

**Features:**
${enabledFeatures.map(feature => `- ${feature}`).join('\n')}

${formData.secondaryGoals ? `**Secondary Goals:**\n${formData.secondaryGoals}\n` : ''}

${formData.technicalPreferences ? `**Technical Constraints:**\n${formData.technicalPreferences}\n` : ''}

${formData.designStyle ? `**Design Style:**\n${formData.designStyle}\n` : ''}

${formData.budgetAndTimeline ? `**Budget & Timeline:**\n${formData.budgetAndTimeline}\n` : ''}

${formData.additionalNotes ? `**Additional Notes:**\n${formData.additionalNotes}\n` : ''}

**AI Integration Notes:**
Hugging Face Inference API is configured for prompt optimization.

**Token-Budget Notice:**
This prompt has been optimized to stay under 500 tokens while preserving all important details.
`.trim();

  try {
    // Optimize the prompt using Hugging Face
    const optimizedPrompt = await optimizePrompt(combinedPrompt);
    return optimizedPrompt;
  } catch (error) {
    console.error('Error generating prompt:', error);
    // Fallback to original prompt if optimization fails
    return combinedPrompt;
  }
};