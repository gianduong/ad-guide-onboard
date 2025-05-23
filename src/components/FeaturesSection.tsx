
import React from 'react';
import { Text, Card, BlockStack, InlineStack } from '@shopify/polaris';

const FeaturesSection = () => {
  const features = [
    {
      title: "Google Ads Conversion Tracking",
      description: "Theo dõi chính xác các conversion từ Google Ads, tối ưu hóa ROI và hiệu quả chiến dịch.",
      benefits: ["Tracking tự động", "Báo cáo realtime", "Tối ưu chi phí"]
    },
    {
      title: "Google Analytics 4 Integration", 
      description: "Tích hợp GA4 để phân tích sâu hành vi khách hàng và customer journey.",
      benefits: ["Custom events", "Advanced analytics", "Cross-platform tracking"]
    },
    {
      title: "Performance Optimization",
      description: "Tối ưu hóa hiệu suất marketing dựa trên dữ liệu chính xác và insights chi tiết.",
      benefits: ["Smart insights", "Automated optimization", "ROI improvement"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <BlockStack gap="1600">
        <div className="text-center">
          <BlockStack gap="400">
            <Text variant="headingXl" as="h3">Tính năng chính</Text>
            <Text variant="bodyLg" as="p" tone="subdued" alignment="center">
              Giải pháp toàn diện cho việc tracking và tối ưu hóa marketing performance
            </Text>
          </BlockStack>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <BlockStack gap="400" align="center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%233366ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>`} 
                    alt={feature.title} 
                  />
                </div>
                <Text variant="headingMd" as="h4" alignment="center">{feature.title}</Text>
                <Text variant="bodyMd" as="p" tone="subdued" alignment="center">{feature.description}</Text>
                <BlockStack gap="200">
                  {feature.benefits.map((benefit, idx) => (
                    <InlineStack gap="200" key={idx} align="start">
                      <img 
                        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/><polyline points='22 4 12 14.01 9 11.01'/></svg>" 
                        alt="Checkmark" 
                      />
                      <Text variant="bodySm" as="span">{benefit}</Text>
                    </InlineStack>
                  ))}
                </BlockStack>
              </BlockStack>
            </Card>
          ))}
        </div>
      </BlockStack>
    </div>
  );
};

export default FeaturesSection;
