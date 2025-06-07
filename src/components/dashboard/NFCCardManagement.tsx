
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Smartphone, QrCode, Edit, BarChart3, Settings } from "lucide-react";

export const NFCCardManagement = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Primary Business Card",
      status: "active",
      views: 542,
      lastUsed: "2 hours ago",
      qrCode: "https://nfconnect.app/c/abc123"
    },
    {
      id: 2,
      name: "Conference Card",
      status: "active",
      views: 289,
      lastUsed: "1 day ago",
      qrCode: "https://nfconnect.app/c/def456"
    },
    {
      id: 3,
      name: "Personal Card",
      status: "inactive",
      views: 156,
      lastUsed: "1 week ago",
      qrCode: "https://nfconnect.app/c/ghi789"
    }
  ]);

  const [showNewCardDialog, setShowNewCardDialog] = useState(false);
  const [newCardName, setNewCardName] = useState("");

  const handleCreateCard = () => {
    if (newCardName.trim()) {
      const newCard = {
        id: cards.length + 1,
        name: newCardName,
        status: "inactive",
        views: 0,
        lastUsed: "Never",
        qrCode: `https://nfconnect.app/c/new${Date.now()}`
      };
      setCards([...cards, newCard]);
      setNewCardName("");
      setShowNewCardDialog(false);
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">NFC Card Management</h2>
        <Dialog open={showNewCardDialog} onOpenChange={setShowNewCardDialog}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              Create New Card
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New NFC Card</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Card Name</Label>
                <Input
                  id="cardName"
                  placeholder="e.g., Business Conference Card"
                  value={newCardName}
                  onChange={(e) => setNewCardName(e.target.value)}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowNewCardDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateCard}>
                  Create Card
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{card.name}</h3>
                  <Badge className={getStatusColor(card.status)}>
                    {card.status}
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Views:</span>
                <span className="font-medium">{card.views}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Used:</span>
                <span className="font-medium">{card.lastUsed}</span>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <Label className="text-xs text-gray-600">QR Code URL:</Label>
                <Input
                  value={card.qrCode}
                  readOnly
                  className="mt-1 text-xs"
                />
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <QrCode className="w-4 h-4 mr-2" />
                QR Code
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <BarChart3 className="w-4 h-4 mr-2" />
                Stats
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Purchase NFC Cards */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Physical NFC Cards?</h3>
          <p className="text-gray-600 mb-4">
            Order premium NFC cards with your custom design. Perfect for networking events and professional meetings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="w-16 h-10 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center shadow-sm">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm font-medium">NFC Enabled</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-10 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center shadow-sm">
                <QrCode className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-sm font-medium">QR Code Included</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-10 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center shadow-sm">
                <Edit className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm font-medium">Custom Design</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
            Order NFC Cards - Starting at $19.99
          </Button>
        </div>
      </Card>
    </div>
  );
};
