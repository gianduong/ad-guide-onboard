
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Target, BarChart3, Users, TrendingUp, Settings, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard = () => {
  const [isGoogleAdsConnected, setIsGoogleAdsConnected] = useState(true);
  const [isGA4Connected, setIsGA4Connected] = useState(true);

  const conversionData = [
    { id: '7110976053', name: 'TRAKPILOT_VIEW_CONTENT', type: 'View Content', status: 'Active', conversions: 1247 },
    { id: '7110970926', name: 'TRAKPILOT_VIEW_CONTENT', type: 'View Content', status: 'Active', conversions: 952 },
    { id: '7129064391', name: 'TRAKPILOT_SEARCH', type: 'Search', status: 'Active', conversions: 843 },
    { id: '7108177171', name: 'TRAKPILOT_ADD_TO_CART', type: 'Add To Cart', status: 'Active', conversions: 567 },
    { id: '7108177174', name: 'TRAKPILOT_BEGIN_CHECKOUT', type: 'Begin Checkout', status: 'Active', conversions: 234 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TrackMaster Dashboard</h1>
                <p className="text-gray-600">Quản lý Google Ads & Analytics tracking</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Settings className="w-4 h-4 mr-2" />
              Cài đặt
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Google Ads</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant={isGoogleAdsConnected ? "default" : "secondary"} className="bg-green-100 text-green-800">
                      {isGoogleAdsConnected ? 'Đã kết nối' : 'Chưa kết nối'}
                    </Badge>
                  </div>
                </div>
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">3 tài khoản</p>
              <p className="text-sm text-gray-600 mt-1">5 conversion actions</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">GA4 Analytics</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant={isGA4Connected ? "default" : "secondary"} className="bg-green-100 text-green-800">
                      {isGA4Connected ? 'Hoạt động' : 'Tắt'}
                    </Badge>
                  </div>
                </div>
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">G-KRL31BTECX</p>
              <p className="text-sm text-gray-600 mt-1">7 events tracking</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Conversions hôm nay</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <ArrowUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">+12%</span>
                  </div>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">3,843</p>
              <p className="text-sm text-gray-600 mt-1">vs. hôm qua</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Users</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <ArrowUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">+8%</span>
                  </div>
                </div>
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">1,924,789,456</p>
              <p className="text-sm text-gray-600 mt-1">Vân Anh - Omegatheme</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="google-ads" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="google-ads" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Google Ads</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Google Analytics</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="google-ads" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Google Ads Conversion Tracking</CardTitle>
                    <CardDescription>Quản lý các conversion actions và theo dõi hiệu quả</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">App status</span>
                    <Switch checked={isGoogleAdsConnected} onCheckedChange={setIsGoogleAdsConnected} />
                    <Badge variant="default" className="bg-green-100 text-green-800">Bật</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Connected Accounts */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Tài khoản đã kết nối</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Nguyễn Gián Dương</p>
                          <p className="text-sm text-gray-600">duongnp@omegatheme.com</p>
                        </div>
                        <Button variant="outline" size="sm">Chi tiết</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Linh Omega</p>
                          <p className="text-sm text-gray-600">linhlt@omegatheme.com</p>
                        </div>
                        <Button variant="outline" size="sm">Chi tiết</Button>
                      </div>
                    </div>
                  </div>

                  {/* Conversion Table */}
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">CTID</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Conversion Name</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Conversions</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {conversionData.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm text-blue-600 font-medium">{item.id}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{item.type}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-2">
                                <Switch checked={true} size="sm" />
                                <Badge variant="default" className="bg-green-100 text-green-800">{item.status}</Badge>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">{item.conversions.toLocaleString()}</td>
                            <td className="px-4 py-3">
                              <Button variant="outline" size="sm">Chi tiết</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Google Analytics 4 Integration</CardTitle>
                    <CardDescription>Cấu hình và theo dõi GA4 tracking</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">GA4 Integration</span>
                    <Switch checked={isGA4Connected} onCheckedChange={setIsGA4Connected} />
                    <Badge variant="default" className="bg-green-100 text-green-800">Bật</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Configuration Summary */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Configuration Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">GA4 measurement ID:</p>
                        <p className="font-mono text-sm font-medium">G-KRL31BTECX</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total events tracking:</p>
                        <p className="font-medium">7</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Tracking value setting:</p>
                        <p className="font-medium">Total Price</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Product identifier:</p>
                        <p className="font-medium">Product Id</p>
                      </div>
                    </div>
                  </div>

                  {/* Settings Options */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Conversion Value</h4>
                    <p className="text-sm text-gray-600 mb-4">Chỉ áp dụng cho sự kiện IC và Purchase</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <input type="radio" name="conversion-value" className="text-blue-600" />
                        <span className="text-sm">Subtotal price</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input type="radio" name="conversion-value" className="text-blue-600" defaultChecked />
                        <span className="text-sm font-medium">Total price</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <p className="text-sm font-medium">Bạn có thể chọn giá trị muốn bao gồm trong conversion:</p>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="text-blue-600" defaultChecked />
                          <span className="text-sm">Shipping - Thêm phí shipping vào giá trị conversion</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="text-blue-600" defaultChecked />
                          <span className="text-sm">Taxes - Thêm tax fees vào giá trị conversion</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="text-blue-600" defaultChecked />
                          <span className="text-sm">Discount - Sử dụng giá cuối cùng sau khi discount được áp dụng</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700">Cập nhật cài đặt</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
