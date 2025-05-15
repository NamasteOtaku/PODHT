export interface InputFormData {
  title: string;
  description: string;
  targetPlatforms: string[];
  primaryAudience: string;
  coreFunctionality: string;
  secondaryGoals: string;
  technicalPreferences: string;
  designStyle: string;
  budgetAndTimeline: string;
  additionalNotes: string;
}

export interface FeatureToggleState {
  authentication: boolean;
  crudOperations: boolean;
  aiChatbot: boolean;
  notifications: boolean;
  analytics: boolean;
  paymentProcessing: boolean;
  socialSharing: boolean;
  offlineMode: boolean;
  localization: boolean;
  advertising: boolean;
  mediaUploads: boolean;
  customBusinessLogic: boolean;
}