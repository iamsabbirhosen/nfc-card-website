
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

export const Analytics = () => {
  const viewsData = [
    { name: "Mon", views: 24, scans: 12 },
    { name: "Tue", views: 42, scans: 18 },
    { name: "Wed", views: 38, scans: 22 },
    { name: "Thu", views: 55, scans: 28 },
    { name: "Fri", views: 68, scans: 35 },
    { name: "Sat", views: 32, scans: 15 },
    { name: "Sun", views: 28, scans: 14 }
  ];

  const deviceData = [
    { name: "Mobile", value: 65, color: "#3b82f6" },
    { name: "Desktop", value: 25, color: "#8b5cf6" },
    { name: "Tablet", value: 10, color: "#10b981" }
  ];

  const topCards = [
    { name: "Primary Business Card", views: 542, increase: "+12%" },
    { name: "Conference Card", views: 289, increase: "+8%" },
    { name: "Personal Card", views: 156, increase: "+3%" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <Badge variant="outline">Last 30 days</Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Views</h3>
          <p className="text-3xl font-bold text-gray-900">1,247</p>
          <p className="text-sm text-green-600 mt-1">+23% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">NFC Scans</h3>
          <p className="text-3xl font-bold text-gray-900">456</p>
          <p className="text-sm text-green-600 mt-1">+18% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">QR Scans</h3>
          <p className="text-3xl font-bold text-gray-900">321</p>
          <p className="text-sm text-blue-600 mt-1">+15% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Conversion Rate</h3>
          <p className="text-3xl font-bold text-gray-900">6.2%</p>
          <p className="text-sm text-green-600 mt-1">+2.1% from last month</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#3b82f6" name="Views" />
              <Bar dataKey="scans" fill="#8b5cf6" name="Scans" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            {deviceData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top Performing Cards */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Cards</h3>
        <div className="space-y-4">
          {topCards.map((card, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {index + 1}
                </div>
                <span className="font-medium text-gray-900">{card.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{card.views} views</span>
                <Badge variant="secondary" className="text-green-600 bg-green-100">
                  {card.increase}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Engagement Timeline */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Timeline</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={viewsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="scans" stroke="#8b5cf6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};
