
import React from 'react';
import { Text, Box, InlineStack } from '@shopify/polaris';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <InlineStack gap="200" align="center" blockAlign="center">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to right, #3366ff, #9966ff)' }}>
              <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>" alt="Target icon" />
            </div>
            <Text variant="headingMd" as="span">TrackMaster</Text>
          </InlineStack>
          <Box paddingBlock="400">
            <Text variant="bodySm" as="p" tone="subdued">
              © 2024 TrackMaster. Tối ưu hóa marketing với tracking chính xác.
            </Text>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Footer;
