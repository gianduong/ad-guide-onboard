
import React from 'react';
import { 
  Page, 
  Card, 
  Button, 
  LegacyStack, 
  Text, 
  Box, 
  BlockStack, 
  InlineStack,
  Badge
} from '@shopify/polaris';
import { 
  LocationMajor as TargetMajor, 
  AnalyticsMajor, 
  TrendingUpMajor as GrowthMajor, 
  ArrowRightMinor, 
  TickSmallMinor as CheckmarkMinor, 
  SettingsMajor, 
  CustomersMajor as UsersMajor,
  ExternalMinor
} from '@shopify/polaris-icons';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: TargetMajor,
      title: "Google Ads Conversion Tracking",
      description: "Theo dõi chính xác các conversion từ Google Ads, tối ưu hóa ROI và hiệu quả chiến dịch.",
      benefits: ["Tracking tự động", "Báo cáo realtime", "Tối ưu chi phí"]
    },
    {
      icon: AnalyticsMajor,
      title: "Google Analytics 4 Integration", 
      description: "Tích hợp GA4 để phân tích sâu hành vi khách hàng và customer journey.",
      benefits: ["Custom events", "Advanced analytics", "Cross-platform tracking"]
    },
    {
      icon: GrowthMajor,
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

  const apps = [
    {
      title: "Omega Facebook Pixel Ad Report",
      description: "Get experienced tracking data & optimize campaign ROAS faster. Exclusive code: BFG30",
      badge: "Get 30% OFF!",
      badgeColor: "success",
      rating: "5.0 (5)",
      reviews: "Impression today at 12:42",
      bgColor: "bg-purple-100",
      icon: "📊"
    },
    {
      title: "Omega - Multi Pinterest Pixels",
      description: "Say goodbye to guesswork when you decide which ads to scale or kill.",
      badge: "Check it now",
      badgeColor: "info",
      bgColor: "bg-pink-100",
      icon: "📌"
    },
    {
      title: "Omega - Multi Snapchat Pixels",
      description: "Fuel your ads with rich data for smart optimization.",
      badge: "Check it now", 
      badgeColor: "info",
      bgColor: "bg-yellow-100",
      icon: "👻"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #f0f4ff, white, #f9f0ff)' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <BlockStack gap="8">
            {/* Logo and Brand */}
            <InlineStack gap="3" align="center" blockAlign="center">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ background: 'linear-gradient(to right, #3366ff, #9966ff)' }}>
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>" alt="Target icon" />
              </div>
              <Text variant="headingXl" as="h1">TrackMaster</Text>
            </InlineStack>

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <BlockStack gap="4">
                <Text variant="heading2xl" as="h2">
                  Nâng cao hiệu quả
                  <span style={{ background: 'linear-gradient(to right, #3366ff, #9966ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Marketing </span> 
                  với Tracking chính xác
                </Text>
                <Text as="p" variant="bodyLg" color="subdued" alignment="center">
                  Theo dõi Google Ads conversion và Google Analytics 4 một cách tự động, 
                  chính xác để tối ưu hóa ROI và hiệu quả chiến dịch marketing của bạn.
                </Text>
              </BlockStack>
            </div>

            {/* CTA Buttons */}
            <InlineStack gap="4" align="center">
              <Button
                primary
                size="large" 
                onClick={() => navigate('/onboarding')}
              >
                Bắt đầu ngay
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/><polyline points='12 5 19 12 12 19'/></svg>" alt="Arrow right" className="ml-2" />
              </Button>
              <Button 
                size="large"
                onClick={() => navigate('/dashboard')}
              >
                Xem Demo
              </Button>
            </InlineStack>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
              {stats.map((stat, index) => (
                <Box key={index} padding="4" background="surface" borderRadius="2" shadow="md">
                  <BlockStack gap="1" align="center">
                    <Text variant="headingLg">{stat.value}</Text>
                    <Text variant="bodySm" color="subdued">{stat.label}</Text>
                    <Text variant="bodySm" color="success">{stat.change}</Text>
                  </BlockStack>
                </Box>
              ))}
            </div>
          </BlockStack>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <BlockStack gap="16">
          <div className="text-center">
            <BlockStack gap="4">
              <Text variant="headingXl" as="h3">Tính năng chính</Text>
              <Text variant="bodyLg" color="subdued" alignment="center">
                Giải pháp toàn diện cho việc tracking và tối ưu hóa marketing performance
              </Text>
            </BlockStack>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <BlockStack gap="4" align="center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <img 
                      src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%233366ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>`} 
                      alt={feature.title} 
                    />
                  </div>
                  <Text variant="headingMd" as="h4" alignment="center">{feature.title}</Text>
                  <Text variant="bodyMd" color="subdued" alignment="center">{feature.description}</Text>
                  <BlockStack gap="2">
                    {feature.benefits.map((benefit, idx) => (
                      <InlineStack gap="2" key={idx} align="start">
                        <img 
                          src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/><polyline points='22 4 12 14.01 9 11.01'/></svg>" 
                          alt="Checkmark" 
                        />
                        <Text variant="bodySm">{benefit}</Text>
                      </InlineStack>
                    ))}
                  </BlockStack>
                </BlockStack>
              </Card>
            ))}
          </div>
        </BlockStack>
      </div>

      {/* Our Apps Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <BlockStack gap="16">
          <div className="text-center">
            <BlockStack gap="4">
              <Badge status="info">Recommended app</Badge>
              <Text variant="headingXl" as="h3">Một vài app của chúng tôi</Text>
              <Text variant="bodyLg" color="subdued" alignment="center">
                Khám phá bộ sưu tập ứng dụng tracking và tối ưu hóa marketing của chúng tôi
              </Text>
            </BlockStack>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <Card key={index}>
                <Card.Section>
                  <div className={`${app.bgColor} h-24 flex items-center justify-center relative`}>
                    <div className="text-3xl">{app.icon}</div>
                    <div className="absolute top-2 right-2">
                      <img 
                        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/><polyline points='15 3 21 3 21 9'/><line x1='10' y1='14' x2='21' y2='3'/></svg>" 
                        alt="External link" 
                      />
                    </div>
                  </div>
                </Card.Section>
                
                <BlockStack gap="3">
                  <Text variant="headingMd" as="h4">{app.title}</Text>
                  <Text variant="bodyMd" color="subdued">{app.description}</Text>
                  
                  {app.rating && (
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span>{app.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{app.reviews}</span>
                    </div>
                  )}
                  
                  <Button 
                    monochrome
                    fullWidth
                  >
                    {app.badge}
                  </Button>
                </BlockStack>
              </Card>
            ))}
          </div>
        </BlockStack>
      </div>

      {/* CTA Section */}
      <div style={{ background: 'linear-gradient(to right, #3366ff, #9966ff)' }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <BlockStack gap="8" align="center">
            <Text variant="headingXl" as="h3" color="subdued-on-dark">
              Sẵn sàng tối ưu hóa marketing của bạn?
            </Text>
            <Text variant="bodyLg" color="subdued-on-dark" alignment="center">
              Bắt đầu với TrackMaster ngay hôm nay và trải nghiệm sự khác biệt trong việc tracking và tối ưu hóa chiến dịch.
            </Text>
            <Button 
              variant="primary" 
              tone="success"
              size="large"
              onClick={() => navigate('/onboarding')}
            >
              Bắt đầu hướng dẫn cài đặt
              <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/><polyline points='12 5 19 12 12 19'/></svg>" alt="Arrow right" className="ml-2" />
            </Button>
          </BlockStack>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <InlineStack gap="2" align="center" blockAlign="center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to right, #3366ff, #9966ff)' }}>
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>" alt="Target icon" />
              </div>
              <Text variant="headingMd" as="span">TrackMaster</Text>
            </InlineStack>
            <Box paddingBlock="4">
              <Text variant="bodySm" as="p" color="subdued">
                © 2024 TrackMaster. Tối ưu hóa marketing với tracking chính xác.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
