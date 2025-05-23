
import React from 'react';
import { Text, Box, BlockStack } from '@shopify/polaris';

const StatsSection = () => {
  const stats = [
    { label: "Conversion Rate", value: "12.5%", change: "+2.3%" },
    { label: "Active Campaigns", value: "24", change: "+5" },
    { label: "Monthly Users", value: "1.9M", change: "+18%" },
    { label: "Cost per Conversion", value: "$24.50", change: "-15%" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
      {stats.map((stat, index) => (
        <Box key={index} padding="400" borderRadius="200">
          <BlockStack gap="100" align="center">
            <Text variant="headingLg" as="p">{stat.value}</Text>
            <Text variant="bodySm" as="p" tone="subdued">{stat.label}</Text>
            <Text variant="bodySm" as="p" tone="success">{stat.change}</Text>
          </BlockStack>
        </Box>
      ))}
    </div>
  );
};

export default StatsSection;
