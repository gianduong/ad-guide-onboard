
import React from 'react';
import { Text, Button, BlockStack } from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'linear-gradient(to right, #3366ff, #9966ff)' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <BlockStack gap="800" align="center">
          <Text variant="headingXl" as="h3" tone="text-inverse">
            Sẵn sàng tối ưu hóa marketing của bạn?
          </Text>
          <Text variant="bodyLg" as="p" tone="text-inverse" alignment="center">
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
  );
};

export default CTASection;
