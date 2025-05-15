import React from 'react';
import { FeatureToggleState } from '../types';

interface FeatureTogglesProps {
  featureToggles: FeatureToggleState;
  handleToggleChange: (toggleName: keyof FeatureToggleState) => void;
}

const FeatureToggles: React.FC<FeatureTogglesProps> = ({ featureToggles, handleToggleChange }) => {
  const toggles = [
    { id: 'authentication', label: 'Authentication', description: 'User login, registration, and profile management' },
    { id: 'crudOperations', label: 'CRUD Operations', description: 'Create, read, update, and delete functionality' },
    { id: 'aiChatbot', label: 'AI-Powered Chatbot', description: 'Intelligent conversational interface' },
    { id: 'notifications', label: 'Push & Email Notifications', description: 'In-app and email alerts' },
    { id: 'analytics', label: 'Analytics & Reporting', description: 'Data visualization and insights' },
    { id: 'paymentProcessing', label: 'Payment Processing', description: 'Secure payment handling' },
    { id: 'socialSharing', label: 'Social Sharing & OAuth', description: 'Social media integration' },
    { id: 'offlineMode', label: 'Offline Mode', description: 'Functionality without internet connection' },
    { id: 'localization', label: 'Localization', description: 'Multi-language support' },
    { id: 'advertising', label: 'Advertising & Monetization', description: 'Revenue generation' },
    { id: 'mediaUploads', label: 'Media Uploads', description: 'Image, video, and file uploads' },
    { id: 'customBusinessLogic', label: 'Custom Business Logic', description: 'Specialized workflows and rules' }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Feature Toggles (select any)</h2>
      <p className="text-sm text-gray-600 mt-2 mb-4">Select the features you want to include in your app</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {toggles.map(toggle => (
          <div 
            key={toggle.id} 
            className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${
              featureToggles[toggle.id as keyof FeatureToggleState]
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => handleToggleChange(toggle.id as keyof FeatureToggleState)}
          >
            <div className="flex items-start">
              <input
                type="checkbox"
                id={toggle.id}
                checked={featureToggles[toggle.id as keyof FeatureToggleState]}
                onChange={() => handleToggleChange(toggle.id as keyof FeatureToggleState)}
                className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <div className="ml-3">
                <label htmlFor={toggle.id} className="font-medium text-gray-800 block">
                  {toggle.label}
                </label>
                <span className="text-xs text-gray-500 block">{toggle.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureToggles;