
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, Building2, Globe, Upload, Palette } from "lucide-react";

export const ProfileManagement = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    company: "Tech Solutions Inc.",
    jobTitle: "Senior Developer",
    bio: "Passionate software developer with 5+ years of experience in building web applications.",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe"
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving profile:', profileData);
    // In a real app, this would send data to your backend
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Profile Management</h2>
        <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-purple-600">
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Photo & Basic Info */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Photo</h3>
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/api/placeholder/96/96" alt="Profile" />
              <AvatarFallback className="text-2xl">
                {profileData.firstName[0]}{profileData.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Upload Photo
            </Button>
            <p className="text-sm text-gray-500 text-center">
              Recommended: Square image, at least 400x400px
            </p>
          </div>
        </Card>

        {/* Personal Information */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={profileData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={profileData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  className="pl-10"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="company"
                  className="pl-10"
                  value={profileData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                value={profileData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell people about yourself..."
              value={profileData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              rows={3}
            />
          </div>
        </Card>
      </div>

      {/* Social Links */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="website"
                type="url"
                className="pl-10"
                placeholder="https://yourwebsite.com"
                value={profileData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/username"
              value={profileData.linkedin}
              onChange={(e) => handleInputChange('linkedin', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter">Twitter</Label>
            <Input
              id="twitter"
              type="url"
              placeholder="https://twitter.com/username"
              value={profileData.twitter}
              onChange={(e) => handleInputChange('twitter', e.target.value)}
            />
          </div>
        </div>
      </Card>

      {/* Card Themes */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Themes</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { name: "Professional", colors: "from-blue-600 to-blue-800" },
            { name: "Creative", colors: "from-purple-600 to-pink-600" },
            { name: "Modern", colors: "from-gray-900 to-gray-700" },
            { name: "Vibrant", colors: "from-orange-500 to-red-600" },
          ].map((theme, index) => (
            <div key={index} className="relative">
              <div className={`h-32 rounded-lg bg-gradient-to-br ${theme.colors} p-4 text-white cursor-pointer hover:scale-105 transition-transform`}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 bg-white/20 rounded-full mb-2"></div>
                    <div className="w-16 h-2 bg-white/60 rounded mb-1"></div>
                    <div className="w-12 h-2 bg-white/40 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Palette className="w-3 h-3" />
                    <span className="text-xs font-medium">{theme.name}</span>
                  </div>
                </div>
              </div>
              {index === 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-600">
                  Active
                </Badge>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
