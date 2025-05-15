import React from 'react';
import { InputFormData } from '../types';

interface InputSectionProps {
  formData: InputFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ formData, handleInputChange }) => {
  const platforms = ['Web', 'iOS', 'Android', 'Desktop', 'Cross-Platform'];
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">App Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title (short name)
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="targetPlatforms" className="block text-sm font-medium text-gray-700 mb-1">
            Target Platform(s)
          </label>
          <select
            id="targetPlatforms"
            name="targetPlatforms"
            multiple
            value={formData.targetPlatforms}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-gray-500">Hold Ctrl/Cmd to select multiple</p>
        </div>
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Brief Description (1-2 sentences)
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="primaryAudience" className="block text-sm font-medium text-gray-700 mb-1">
          Primary Audience (roles/demographics)
        </label>
        <input
          id="primaryAudience"
          name="primaryAudience"
          type="text"
          value={formData.primaryAudience}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="coreFunctionality" className="block text-sm font-medium text-gray-700 mb-1">
          Core Functionality (3-5 bullets)
        </label>
        <textarea
          id="coreFunctionality"
          name="coreFunctionality"
          rows={3}
          value={formData.coreFunctionality}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="- First feature&#10;- Second feature&#10;- Third feature"
          required
        />
      </div>
      
      <div>
        <label htmlFor="secondaryGoals" className="block text-sm font-medium text-gray-700 mb-1">
          Secondary Goals & Nice-to-Haves
        </label>
        <textarea
          id="secondaryGoals"
          name="secondaryGoals"
          rows={2}
          value={formData.secondaryGoals}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="technicalPreferences" className="block text-sm font-medium text-gray-700 mb-1">
            Technical Preferences (frameworks, "No preference")
          </label>
          <input
            id="technicalPreferences"
            name="technicalPreferences"
            type="text"
            value={formData.technicalPreferences}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="designStyle" className="block text-sm font-medium text-gray-700 mb-1">
            Design Style Notes
          </label>
          <input
            id="designStyle"
            name="designStyle"
            type="text"
            value={formData.designStyle}
            onChange={handleInputChange}
            placeholder="e.g., minimalist, material"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="budgetAndTimeline" className="block text-sm font-medium text-gray-700 mb-1">
          Budget & Timeline
        </label>
        <input
          id="budgetAndTimeline"
          name="budgetAndTimeline"
          type="text"
          value={formData.budgetAndTimeline}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes (integrations, compliance, etc.)
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={2}
          value={formData.additionalNotes}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default InputSection;