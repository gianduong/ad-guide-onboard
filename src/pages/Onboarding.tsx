
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ArrowRight, Play, BarChart3, Target, Settings } from 'lucide-react';
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
  <div className={`flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 ${
    isActive ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'
  }`}>
    <div className={`p-3 rounded-full transition-colors duration-300 ${
      isCompleted ? 'bg-green-100 text-green-600' : 
      isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
    }`}>
      {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
    </div>
    <div className="flex-1">
      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
        isActive ? 'text-blue-900' : 'text-gray-700'
      }`}>{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      icon: Play,
      title: "Chào mừng đến với TrackMaster",
      description: "Giải pháp toàn diện để tracking Google Ads conversion và Google Analytics 4 cho doanh nghiệp của bạn.",
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
            <Target className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              TrackMaster Analytics
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Theo dõi hiệu quả quảng cáo và phân tích hành vi khách hàng một cách chính xác
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-blue-900">Google Ads Tracking</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-green-900">GA4 Analytics</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Target,
      title: "Kết nối Google Ads",
      description: "Liên kết tài khoản Google Ads của bạn để bắt đầu tracking conversion một cách tự động.",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Kết nối Google Ads</h3>
            <p className="text-gray-600">Theo dõi conversion và đo lường ROI chính xác</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Bạn sẽ có thể:</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Tracking conversion tự động</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Đo lường hiệu quả chiến dịch</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Tối ưu hóa chi phí quảng cáo</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Báo cáo chi tiết theo thời gian thực</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: BarChart3,
      title: "Tích hợp Google Analytics 4",
      description: "Cài đặt GA4 tracking để phân tích hành vi khách hàng và tối ưu hóa website.",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
              <BarChart3 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Google Analytics 4</h3>
            <p className="text-gray-600">Phân tích sâu về hành vi và journey của khách hàng</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Tính năng GA4:</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Tracking sự kiện tùy chỉnh</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Phân tích customer journey</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Báo cáo conversion funnel</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Tích hợp với Google Ads</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: Settings,
      title: "Hoàn tất cài đặt",
      description: "Cấu hình cuối cùng và bắt đầu sử dụng TrackMaster để theo dõi hiệu quả marketing.",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sẵn sàng sử dụng!</h3>
            <p className="text-gray-600">Bạn đã hoàn tất việc cài đặt TrackMaster</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Bước tiếp theo:</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <span>Truy cập Dashboard để xem tổng quan</span>
              </li>
              <li className="flex items-center space-x-3">
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <span>Cấu hình conversion actions</span>
              </li>
              <li className="flex items-center space-x-3">
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <span>Thiết lập custom events</span>
              </li>
              <li className="flex items-center space-x-3">
                <ArrowRight className="w-5 h-5 text-blue-500" />
                <span>Xem báo cáo chi tiết</span>
              </li>
            </ul>
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
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TrackMaster</span>
          </div>
          <Progress value={progress} className="w-full max-w-md mx-auto mb-2" />
          <p className="text-sm text-gray-600">Bước {currentStep + 1} / {steps.length}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hướng dẫn cài đặt</CardTitle>
                <CardDescription>Làm theo các bước để hoàn tất cài đặt</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
            <Card className="min-h-[500px]">
              <CardContent className="p-8">
                <div className="animate-fade-in">
                  {steps[currentStep].content}
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2"
                  >
                    <span>Quay lại</span>
                  </Button>

                  <Button
                    onClick={nextStep}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <span>{currentStep === steps.length - 1 ? 'Hoàn tất' : 'Tiếp tục'}</span>
                    <ArrowRight className="w-4 h-4" />
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
