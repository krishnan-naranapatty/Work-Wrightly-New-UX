
import { useState } from "react";
import { Search, Plus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Forms = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const forms = [
    { id: 1, name: "Lead Form V3", type: "lead" },
    { id: 2, name: "Lead Form v2", type: "lead" },
    { id: 3, name: "Commercial Invoice for Others", type: "invoice" },
    { id: 4, name: "Create Store", type: "store" },
    { id: 5, name: "Customer Survey", type: "survey" },
    { id: 6, name: "Product Training Scheduled Rescheduled", type: "training" },
    { id: 7, name: "Post Sales Approval", type: "sales" },
    { id: 8, name: "Store Created", type: "store" },
    { id: 9, name: "Answered Callback", type: "callback" },
    { id: 10, name: "Demo Completed v2", type: "demo" },
    { id: 11, name: "Demo Scheduled v2", type: "demo" },
    { id: 12, name: "Phone call activity v2", type: "activity" },
    { id: 13, name: "Payment Initiated others", type: "payment" },
    { id: 14, name: "Commercial Invoice", type: "invoice" },
    { id: 15, name: "Proforma Invoice", type: "invoice" },
    { id: 16, name: "Not Interested", type: "status" },
    { id: 17, name: "Callback Requested", type: "callback" },
    { id: 18, name: "Lead Form", type: "lead" },
    { id: 19, name: "Junk", type: "status" },
    { id: 20, name: "Whatsapp Campaign", type: "campaign" },
    { id: 21, name: "Junk or Invalid lead", type: "status" },
    { id: 22, name: "Sales activity form", type: "sales" },
    { id: 23, name: "Purchase follow up", type: "purchase" },
    { id: 24, name: "Payment awaited", type: "payment" },
    { id: 25, name: "Demo completed", type: "demo" },
    { id: 26, name: "Demo scheduled", type: "demo" },
    { id: 27, name: "Website completed", type: "website" },
    { id: 28, name: "Free trial website designing", type: "website" },
    { id: 29, name: "Catalogue received", type: "catalogue" },
    { id: 30, name: "Phone call activity", type: "activity" }
  ];

  const filteredForms = forms.filter(form =>
    form.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredForms.map((form) => (
            <Card key={form.id} className="hover:shadow-md transition-shadow cursor-pointer bg-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{form.name}</h3>
                    <span className="text-sm text-gray-500 capitalize">{form.type}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-400 hover:text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
