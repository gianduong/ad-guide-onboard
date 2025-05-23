
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, BarChart3, ArrowRight, CheckCircle, TrendingUp, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Google Ads Conversion Tracking",
      description: "Theo dõi chính xác các conversion từ Google Ads, tối ưu hóa ROI và hiệu quả chiến dịch.",
      benefits: ["Tracking tự động", "Báo cáo realtime", "Tối ưu chi phí"]
    },
    {
      icon: BarChart3,
      title: "Google Analytics 4 Integration", 
      description: "Tích hợp GA4 để phân tích sâu hành vi khách hàng và customer journey.",
      benefits: ["Custom events", "Advanced analytics", "Cross-platform tracking"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Tối ưu hóa hiệu suất marketing dựa trên dữ liệu chính xác và insights chi tiết.",
      benefits: ["Smart insights", "Automated optimization", "ROI improvement"]
    }
  ];

  const stats = [
    { label: "Conversion Rate", value: "12.5%", change: "+2.3%" },
    { label: "Active Campaigns", value: "24", change: "+5" },
    { label: "Monthly Users", value: "1.9M", change: "+18%" },
    { label: "Cost per Conversion", value: "$24.50", change: "-15%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">TrackMaster</h1>
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Nâng cao hiệu quả
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Marketing </span>
                với Tracking chính xác
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Theo dõi Google Ads conversion và Google Analytics 4 một cách tự động, 
                chính xác để tối ưu hóa ROI và hiệu quả chiến dịch marketing của bạn.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                onClick={() => navigate('/onboarding')}
              >
                Bắt đầu ngay
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => navigate('/dashboard')}
              >
                Xem Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Tính năng chính
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giải pháp toàn diện cho việc tracking và tối ưu hóa marketing performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-white">
              Sẵn sàng tối ưu hóa marketing của bạn?
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Bắt đầu với TrackMaster ngay hôm nay và trải nghiệm sự khác biệt trong việc tracking và tối ưu hóa chiến dịch.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/onboarding')}
            >
              Bắt đầu hướng dẫn cài đặt
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TrackMaster</span>
            </div>
            <p className="text-gray-400">
              © 2024 TrackMaster. Tối ưu hóa marketing với tracking chính xác.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
