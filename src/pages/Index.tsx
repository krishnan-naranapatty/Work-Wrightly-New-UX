
import { useState } from "react";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";
import FilterSection from "@/components/FilterSection";
import LeadsTable from "@/components/LeadsTable";
import SidebarCards from "@/components/SidebarCards";
import RightSidebar from "@/components/RightSidebar";
import { Button } from "@/components/ui/button";
import { Plus, Download, Upload } from "lucide-react";

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
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <StatsSection />
        <SidebarCards />
        <FilterSection />

        {/* Action buttons above the table */}
        <div className="mb-4 flex flex-wrap gap-2">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Plus className="mr-1 h-4 w-4" /> Add
          </Button>
          <Button variant="outline" className="bg-white">
            <Upload className="mr-1 h-4 w-4" /> Upload
          </Button>
          <Button variant="outline" className="bg-white">
            <Download className="mr-1 h-4 w-4" /> Download
          </Button>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:flex gap-6">
          <LeadsTable leads={filteredLeads} />
          <RightSidebar />
        </div>

        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden space-y-6">
          <LeadsTable leads={filteredLeads} />
        </div>
      </div>
    </div>
  );
};

export default Index;
