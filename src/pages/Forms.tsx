
import { useState } from "react";
import { Search, Plus, Trash2, Star, Clock, Users, TrendingUp, FileText, Phone, Store, CreditCard, Mail, Calendar, Activity, User, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getTypeIcon = (type: string) => {
    const iconMap: { [key: string]: any } = {
      lead: FileText,
      invoice: CreditCard,
      store: Store,
      survey: Users,
      training: Calendar,
      sales: TrendingUp,
      callback: Phone,
      demo: Users,
      activity: Activity,
      payment: CreditCard,
      status: AlertCircle,
      campaign: Mail,
      purchase: Store,
      website: Activity,
      catalogue: FileText
    };
    return iconMap[type] || FileText;
  };

  const getTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      lead: "bg-blue-500",
      invoice: "bg-green-500",
      store: "bg-purple-500",
      survey: "bg-orange-500",
      training: "bg-indigo-500",
      sales: "bg-emerald-500",
      callback: "bg-cyan-500",
      demo: "bg-pink-500",
      activity: "bg-amber-500",
      payment: "bg-teal-500",
      status: "bg-red-500",
      campaign: "bg-violet-500",
      purchase: "bg-lime-500",
      website: "bg-sky-500",
      catalogue: "bg-rose-500"
    };
    return colorMap[type] || "bg-gray-500";
  };

  const forms = [
    { id: 1, name: "Lead Form V3", type: "lead", itemCount: 245, isDefault: true, lastUpdated: "2 hours ago", status: "active", completionRate: 85 },
    { id: 2, name: "Lead Form v2", type: "lead", itemCount: 189, isDefault: false, lastUpdated: "1 day ago", status: "active", completionRate: 78 },
    { id: 3, name: "Commercial Invoice for Others", type: "invoice", itemCount: 67, isDefault: false, lastUpdated: "3 days ago", status: "active", completionRate: 92 },
    { id: 4, name: "Create Store", type: "store", itemCount: 23, isDefault: false, lastUpdated: "5 days ago", status: "inactive", completionRate: 45 },
    { id: 5, name: "Customer Survey", type: "survey", itemCount: 156, isDefault: false, lastUpdated: "1 hour ago", status: "active", completionRate: 67 },
    { id: 6, name: "Product Training Scheduled Rescheduled", type: "training", itemCount: 34, isDefault: false, lastUpdated: "4 hours ago", status: "active", completionRate: 89 },
    { id: 7, name: "Post Sales Approval", type: "sales", itemCount: 89, isDefault: false, lastUpdated: "6 hours ago", status: "active", completionRate: 73 },
    { id: 8, name: "Store Created", type: "store", itemCount: 45, isDefault: false, lastUpdated: "2 days ago", status: "active", completionRate: 81 },
    { id: 9, name: "Answered Callback", type: "callback", itemCount: 78, isDefault: false, lastUpdated: "8 hours ago", status: "active", completionRate: 95 },
    { id: 10, name: "Demo Completed v2", type: "demo", itemCount: 112, isDefault: false, lastUpdated: "1 day ago", status: "active", completionRate: 88 },
    { id: 11, name: "Demo Scheduled v2", type: "demo", itemCount: 203, isDefault: false, lastUpdated: "3 hours ago", status: "active", completionRate: 76 },
    { id: 12, name: "Phone call activity v2", type: "activity", itemCount: 167, isDefault: false, lastUpdated: "5 hours ago", status: "active", completionRate: 82 },
    { id: 13, name: "Payment Initiated others", type: "payment", itemCount: 56, isDefault: false, lastUpdated: "1 week ago", status: "inactive", completionRate: 58 },
    { id: 14, name: "Commercial Invoice", type: "invoice", itemCount: 134, isDefault: false, lastUpdated: "2 days ago", status: "active", completionRate: 90 },
    { id: 15, name: "Proforma Invoice", type: "invoice", itemCount: 89, isDefault: false, lastUpdated: "4 days ago", status: "active", completionRate: 87 },
    { id: 16, name: "Not Interested", type: "status", itemCount: 298, isDefault: false, lastUpdated: "1 hour ago", status: "active", completionRate: 65 },
    { id: 17, name: "Callback Requested", type: "callback", itemCount: 145, isDefault: false, lastUpdated: "6 hours ago", status: "active", completionRate: 79 },
    { id: 18, name: "Lead Form", type: "lead", itemCount: 423, isDefault: false, lastUpdated: "2 hours ago", status: "active", completionRate: 83 },
    { id: 19, name: "Junk", type: "status", itemCount: 67, isDefault: false, lastUpdated: "1 day ago", status: "inactive", completionRate: 12 },
    { id: 20, name: "Whatsapp Campaign", type: "campaign", itemCount: 234, isDefault: false, lastUpdated: "3 hours ago", status: "active", completionRate: 71 },
    { id: 21, name: "Junk or Invalid lead", type: "status", itemCount: 89, isDefault: false, lastUpdated: "2 days ago", status: "inactive", completionRate: 8 },
    { id: 22, name: "Sales activity form", type: "sales", itemCount: 178, isDefault: false, lastUpdated: "4 hours ago", status: "active", completionRate: 86 },
    { id: 23, name: "Purchase follow up", type: "purchase", itemCount: 123, isDefault: false, lastUpdated: "1 day ago", status: "active", completionRate: 74 },
    { id: 24, name: "Payment awaited", type: "payment", itemCount: 234, isDefault: false, lastUpdated: "5 hours ago", status: "active", completionRate: 69 },
    { id: 25, name: "Demo completed", type: "demo", itemCount: 156, isDefault: false, lastUpdated: "7 hours ago", status: "active", completionRate: 91 },
    { id: 26, name: "Demo scheduled", type: "demo", itemCount: 267, isDefault: false, lastUpdated: "2 hours ago", status: "active", completionRate: 77 },
    { id: 27, name: "Website completed", type: "website", itemCount: 45, isDefault: false, lastUpdated: "3 days ago", status: "active", completionRate: 94 },
    { id: 28, name: "Free trial website designing", type: "website", itemCount: 78, isDefault: false, lastUpdated: "1 day ago", status: "active", completionRate: 68 },
    { id: 29, name: "Catalogue received", type: "catalogue", itemCount: 123, isDefault: false, lastUpdated: "4 days ago", status: "active", completionRate: 80 },
    { id: 30, name: "Phone call activity", type: "activity", itemCount: 189, isDefault: false, lastUpdated: "6 hours ago", status: "active", completionRate: 75 }
  ];

  const filteredForms = forms.filter(form =>
    form.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleCardClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Forms</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white"
                />
              </div>
              
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <Plus className="mr-1 h-4 w-4" />
                Create
              </Button>
            </div>
          </div>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredForms.map((form) => {
            const IconComponent = getTypeIcon(form.type);
            const typeColor = getTypeColor(form.type);
            
            return (
              <Card 
                key={form.id} 
                className="hover:shadow-lg transition-all duration-200 cursor-pointer bg-white border-l-4 hover:scale-[1.02]"
                style={{ borderLeftColor: typeColor.replace('bg-', '#') }}
                onClick={handleCardClick}
              >
                <CardContent className="p-6">
                  {/* Header with Icon and Actions */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${typeColor} bg-opacity-10 mr-4`}>
                      <IconComponent className={`h-6 w-6 ${typeColor.replace('bg-', 'text-')}`} />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {form.isDefault && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-gray-400 hover:text-red-500 hover:bg-red-50 h-8 w-8"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Form Name */}
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight">
                    {form.name}
                  </h3>

                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <Badge variant="secondary" className="text-xs capitalize font-medium">
                      {form.type}
                    </Badge>
                    {form.isDefault && (
                      <Badge variant="outline" className="text-xs text-blue-600 border-blue-200 bg-blue-50">
                        Default Dashboard
                      </Badge>
                    )}
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        form.status === 'active' 
                          ? 'text-green-600 border-green-200 bg-green-50' 
                          : 'text-gray-600 border-gray-200 bg-gray-50'
                      }`}
                    >
                      {form.status}
                    </Badge>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{form.itemCount}</div>
                      <div className="text-xs text-gray-500 font-medium">Items</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{form.completionRate}%</div>
                      <div className="text-xs text-gray-500 font-medium">Complete</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-gray-700">Completion Rate</span>
                      <span className="text-xs text-gray-500">{form.completionRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          form.completionRate >= 80 ? 'bg-green-500' :
                          form.completionRate >= 60 ? 'bg-yellow-500' : 
                          'bg-red-500'
                        }`}
                        style={{ width: `${form.completionRate}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className="flex items-center text-sm text-gray-500 border-t pt-3">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Updated {form.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredForms.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <div className="text-lg font-medium mb-2">No forms found</div>
              <div className="text-sm">Try adjusting your search terms</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forms;
