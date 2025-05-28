

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ArrowRight, Play, BarChart3, Target, Settings, ExternalLink, Eye, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep = ({ 
  icon: Icon, 
  title, 
  description, 
  isActive, 
  isCompleted 
}: {
  icon: any;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
}) => (
  <div className={`flex items-start space-x-3 p-4 rounded-lg transition-all duration-300 ${
    isActive ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'
  }`}>
    <div className={`p-2 rounded-full transition-colors duration-300 ${
      isCompleted ? 'bg-green-100 text-green-600' : 
      isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
    }`}>
      {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
    </div>
    <div className="flex-1">
      <h3 className={`text-base font-semibold transition-colors duration-300 ${
        isActive ? 'text-blue-900' : 'text-gray-700'
      }`}>{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      icon: Play,
      title: "Welcome to TrackMaster",
      description: "Your complete analytics solution for tracking Google Ads conversions and Google Analytics 4.",
      content: (
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
            <Target className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              TrackMaster Analytics
            </h2>
            <p className="text-gray-600 mb-6">
              Track ad performance and analyze customer behavior with precision
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 text-left">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">How TrackMaster Works:</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Connect Google Ads</p>
                  <p className="text-sm text-gray-600">Link your Google Ads account for automatic conversion tracking</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-green-600">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Setup Google Analytics 4</p>
                  <p className="text-sm text-gray-600">Configure GA4 to track user behavior and website events</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-purple-600">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Monitor Performance</p>
                  <p className="text-sm text-gray-600">Track traffic, performance metrics, and key data insights</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <Target className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <p className="text-xs font-medium text-blue-900">Ad Tracking</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <BarChart3 className="w-5 h-5 text-green-600 mx-auto mb-1" />
              <p className="text-xs font-medium text-green-900">GA4 Analytics</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-center">
              <Settings className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <p className="text-xs font-medium text-purple-900">Data Insights</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Target,
      title: "Connect Google Ads",
      description: "Link your Google Ads account to start automatic conversion tracking.",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-3">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Google Ads</h3>
            <p className="text-gray-600">Track conversions and measure ROI accurately</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Automatic conversion tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Campaign performance measurement</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Ad spend optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Real-time detailed reports</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: BarChart3,
      title: "Integrate Google Analytics 4",
      description: "Set up GA4 tracking to analyze customer behavior and optimize your website.",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-3">
              <BarChart3 className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Google Analytics 4</h3>
            <p className="text-gray-600">Deep insights into customer behavior and journeys</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">GA4 Features:</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Custom event tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Customer journey analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Conversion funnel reports</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Google Ads integration</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: Settings,
      title: "Complete Setup",
      description: "Final configuration and start using TrackMaster to track your marketing performance.",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-14 h-14 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-3">
              <CheckCircle className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Go!</h3>
            <p className="text-gray-600">You've successfully set up TrackMaster</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Next Steps:</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-3 h-3 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 mb-1">Set Goals for Google Ads</p>
                  <p className="text-sm text-gray-600 mb-3">Configure conversion goals using your newly created events</p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-gray-800">Setup Instructions</p>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>5 steps</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-blue-600">1</span>
                        </div>
                        <span className="text-gray-700">Visit Google Campaigns</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-blue-600">2</span>
                        </div>
                        <span className="text-gray-700">Select Campaign Settings</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-blue-600">3</span>
                        </div>
                        <span className="text-gray-700">Choose Conversion Goals</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-blue-600">4</span>
                        </div>
                        <span className="text-gray-700">Change Campaign Goals</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-blue-600">5</span>
                        </div>
                        <span className="text-gray-700">Select your newly created events</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-100">
                      <a 
                        href="https://ads.google.com/aw/adgroups" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <span>Open Google Ads</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BarChart3 className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Monitor Google Analytics 4</p>
                  <p className="text-sm text-gray-600">Track user behavior and conversion funnels in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Activity className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Track Events with Real-time Dashboard</p>
                  <p className="text-sm text-gray-600">Monitor live events and performance metrics within the app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">TrackMaster</span>
          </div>
          <Progress value={progress} className="w-full max-w-sm mx-auto mb-2" />
          <p className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Steps sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Setup Guide</CardTitle>
                <CardDescription className="text-sm">Follow these steps to complete setup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {steps.map((step, index) => (
                  <OnboardingStep
                    key={index}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    isActive={index === currentStep}
                    isCompleted={index < currentStep}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <Card className="min-h-[450px]">
              <CardContent className="p-6">
                <div className="animate-fade-in">
                  {steps[currentStep].content}
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-1"
                    size="sm"
                  >
                    <span>Back</span>
                  </Button>

                  <Button
                    onClick={nextStep}
                    className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="sm"
                  >
                    <span>{currentStep === steps.length - 1 ? 'Complete' : 'Continue'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

