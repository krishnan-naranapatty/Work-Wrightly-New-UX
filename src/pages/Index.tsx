
import { useState } from "react";
import { Search, Filter, Plus, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LeadCard from "@/components/LeadCard";
import StatsCards from "@/components/StatsCards";
import FilterPanel from "@/components/FilterPanel";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const leads = [
    {
      id: "Z25060298",
      name: "Haren",
      company: "Avasar-NX",
      email: "haren.hm@gmail.com",
      phone: "9594049055",
      status: "In Progress",
      stage: "Post Sales Process",
      source: "New Opportunity",
      assignedTo: "Riya Yadav",
      category: "wedding materials",
      businessType: "offline store",
      createdAt: "02 Jun 2025",
      updatedAt: "02 Jun 2025",
      priority: "high"
    },
    {
      id: "Z25060297",
      name: "Himani Tekwani",
      company: "brunchbills",
      email: "himanipanka2012@gmail.com",
      phone: "7738904036",
      status: "In Progress",
      stage: "Post Sales Process",
      source: "Combined lead source",
      assignedTo: "Riya Yadav",
      category: "Premium Perfumes",
      businessType: "Instagram",
      createdAt: "02 Jun 2025",
      updatedAt: "02 Jun 2025",
      priority: "medium"
    },
    {
      id: "Z25523978",
      name: "Murtaza Hasanali",
      company: "Avasar-NX",
      email: "murtazahasanali066@gmail.com",
      phone: "9730860768",
      status: "In Progress",
      stage: "Payment completed",
      source: "Affiliate",
      assignedTo: "Radhika Trivedi",
      category: "Garage and Repair",
      businessType: "Providing services offline",
      createdAt: "23 May 2025",
      updatedAt: "23 May 2025",
      priority: "high"
    },
    {
      id: "Z25522977",
      name: "Ashwini Kuppasgouda",
      company: "Green Millets",
      email: "ashetti35@gmail.com",
      phone: "9900022610",
      status: "In Progress",
      stage: "Post Sales Process",
      source: "New Opportunity",
      assignedTo: "Riya Yadav",
      category: "food and beverages",
      businessType: "instagram and offline",
      createdAt: "22 May 2025",
      updatedAt: "02 Jun 2025",
      priority: "medium"
    },
    {
      id: "Z25520976",
      name: "Uday",
      company: "Murali Agro Industries",
      email: "muraliagroid5050@gmail.com",
      phone: "9403838469",
      status: "In Progress",
      stage: "Post Sales Process",
      source: "Affiliate",
      assignedTo: "Riya Yadav",
      category: "Agriculture Equipment",
      businessType: "Offline and Online",
      createdAt: "20 May 2025",
      updatedAt: "30 May 2025",
      priority: "low"
    }
  ];

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || lead.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {filteredLeads.length} Leads
              </Badge>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Lead
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <StatsCards leads={leads} />

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search leads by name, company, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full sm:w-auto"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="mt-4 pt-4 border-t">
                <FilterPanel />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Leads Grid */}
        <div className="grid gap-4">
          {filteredLeads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>

        {filteredLeads.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium mb-2">No leads found</h3>
                <p>Try adjusting your search criteria or add a new lead.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
