
import React from 'react';
import { Text, Button, InlineStack, BlockStack } from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <BlockStack gap="800">
          {/* Logo and Brand */}
          <InlineStack gap="300" align="center" blockAlign="center">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ background: 'linear-gradient(to right, #3366ff, #9966ff)' }}>
              <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>" alt="Target icon" />
            </div>
            <Text variant="headingXl" as="h1">TrackMaster</Text>
          </InlineStack>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <BlockStack gap="400">
              <Text variant="heading2xl" as="h2">
                Nâng cao hiệu quả
                <span style={{ background: 'linear-gradient(to right, #3366ff, #9966ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Marketing </span> 
                với Tracking chính xác
              </Text>
              <Text as="p" variant="bodyLg" tone="subdued" alignment="center">
                Theo dõi Google Ads conversion và Google Analytics 4 một cách tự động, 
                chính xác để tối ưu hóa ROI và hiệu quả chiến dịch marketing của bạn.
              </Text>
            </BlockStack>
          </div>

          {/* CTA Buttons */}
          <InlineStack gap="400" align="center">
            <Button
              variant="primary"
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
        </BlockStack>
      </div>
    </div>
  );
};

export default HeroSection;
