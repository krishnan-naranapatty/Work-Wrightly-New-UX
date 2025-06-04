import { useState } from "react";
import { Search, Filter, Plus, Download, Settings, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <div className="text-white">
                <div className="text-lg font-bold leading-tight">WORK</div>
                <div className="text-lg font-bold leading-tight">WRIGHTLY</div>
              </div>
              <nav className="flex space-x-6">
                <button className="text-white bg-blue-500 px-4 py-2 rounded text-sm">DASHBOARD</button>
                <button className="text-gray-300 hover:text-white text-sm">LEADS</button>
                <button className="text-gray-300 hover:text-white text-sm">ROLES</button>
                <button className="text-gray-300 hover:text-white text-sm">MY TEAM</button>
                <button className="text-gray-300 hover:text-white text-sm">SETTINGS</button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Add
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
                <Upload className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
                <Filter className="h-4 w-4" />
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search a lead..."
                  className="pl-10 w-48 bg-white"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-green-500 text-white p-4 rounded">
            <div className="text-2xl font-bold">23 ▲</div>
            <div className="text-sm">new leads</div>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded">
            <div className="text-2xl font-bold">3829</div>
            <div className="text-sm">total leads</div>
          </div>
          <div className="bg-blue-400 text-white p-4 rounded">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm">open roles</div>
          </div>
          <div className="bg-blue-300 text-white p-4 rounded">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm">suitable leads</div>
          </div>
          <div className="bg-blue-600 text-white p-4 rounded">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm">recent hires</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-4">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="View leads for all roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">View leads for all roles</SelectItem>
              <SelectItem value="developer">Developer roles</SelectItem>
              <SelectItem value="support">Support roles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Main Content - Leads Table and Sidebar */}
        <div className="flex gap-6">
          {/* Leads Table - Left Side */}
          <div className="flex-1 max-w-4xl">
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-50 px-6 py-3 border-b">
                  <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                    <div className="col-span-3">Lead Name</div>
                    <div className="col-span-2">Lead Progress</div>
                    <div className="col-span-7">Lead Details</div>
                  </div>
                </div>
                
                {filteredLeads.map((lead) => (
                  <div key={lead.id} className="px-6 py-4 border-b hover:bg-gray-50">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-3 flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-500">last contact: {lead.updatedAt}</div>
                        </div>
                      </div>
                      
                      <div className="col-span-2">
                        <div className="flex items-center space-x-1">
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <span key={star} className="text-green-500">★</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{lead.priority === "high" ? "80%" : "60%"} progress</div>
                      </div>
                      
                      <div className="col-span-7">
                        <div className="grid grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-gray-500">Messages (9)</div>
                            <div className="text-gray-500">Phone (2)</div>
                            <div className="text-gray-500">Live meeting (1)</div>
                            <div className="text-gray-500">Notes (3)</div>
                          </div>
                          <div className="col-span-3">
                            <div className="text-gray-900">{lead.stage}</div>
                            <div className="text-sm text-gray-500">{lead.assignedTo}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="p-6 text-center">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    SHOW MORE LEADS
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="w-64 space-y-6 flex-shrink-0">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-3">Top Open Roles</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Lead Java Developer</span>
                    <span className="text-gray-500">23 leads</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Technical Support</span>
                    <span className="text-gray-500">21 leads</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sys Admin</span>
                    <span className="text-gray-500">16 leads</span>
                  </div>
                </div>
                <Button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-sm">
                  Add a new role
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-3">My top team members</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <span className="text-sm">Adrian Robinson</span>
                    </div>
                    <span className="text-xs text-gray-500">15 leads</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <span className="text-sm">Teddy Smith</span>
                    </div>
                    <span className="text-xs text-gray-500">13 leads</span>
                  </div>
                </div>
                <Button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-sm">
                  Invite a new member
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
