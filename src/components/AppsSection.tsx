
import React from 'react';
import { Text, Card, BlockStack, Button, Badge } from '@shopify/polaris';

const AppsSection = () => {
  const apps = [
    {
      title: "Omega Facebook Pixel Ad Report",
      description: "Get experienced tracking data & optimize campaign ROAS faster. Exclusive code: BFG30",
      badge: "Get 30% OFF!",
      rating: "5.0 (5)",
      reviews: "Impression today at 12:42",
      bgColor: "bg-purple-100",
      icon: "📊"
    },
    {
      title: "Omega - Multi Pinterest Pixels",
      description: "Say goodbye to guesswork when you decide which ads to scale or kill.",
      badge: "Check it now",
      bgColor: "bg-pink-100",
      icon: "📌"
    },
    {
      title: "Omega - Multi Snapchat Pixels",
      description: "Fuel your ads with rich data for smart optimization.",
      badge: "Check it now", 
      bgColor: "bg-yellow-100",
      icon: "👻"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <BlockStack gap="1600">
        <div className="text-center">
          <BlockStack gap="400">
            <Badge>Recommended app</Badge>
            <Text variant="headingXl" as="h3">Một vài app của chúng tôi</Text>
            <Text variant="bodyLg" as="p" tone="subdued" alignment="center">
              Khám phá bộ sưu tập ứng dụng tracking và tối ưu hóa marketing của chúng tôi
            </Text>
          </BlockStack>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <Card key={index}>
              <div className={`${app.bgColor} h-24 flex items-center justify-center relative`}>
                <div className="text-3xl">{app.icon}</div>
                <div className="absolute top-2 right-2">
                  <img 
                    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/><polyline points='15 3 21 3 21 9'/><line x1='10' y1='14' x2='21' y2='3'/></svg>" 
                    alt="External link" 
                  />
                </div>
              </div>
              
              <BlockStack gap="300">
                <Text variant="headingMd" as="h4">{app.title}</Text>
                <Text variant="bodyMd" as="p" tone="subdued">{app.description}</Text>
                
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
                
                <Button fullWidth>
                  {app.badge}
                </Button>
              </BlockStack>
            </Card>
          ))}
        </div>
      </BlockStack>
    </div>
  );
};

export default AppsSection;
