
import React from 'react';
import { Text, Button, BlockStack } from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@shopify/polaris-icons';

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
            icon={ArrowRightIcon}
          >
            Bắt đầu hướng dẫn cài đặt
          </Button>
        </BlockStack>
      </div>
    </div>
  );
};

export default CTASection;
