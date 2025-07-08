import { useState } from "react";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";
import FilterSection from "@/components/FilterSection";
import LeadsTable from "@/components/LeadsTable";
import SidebarCards from "@/components/SidebarCards";
import RightSidebar from "@/components/RightSidebar";
import { Button } from "@/components/ui/button";
import { Plus, Download, Upload } from "lucide-react";
import { DateFilterType } from "@/components/DateFilter";
import { getDateRange, isDateInRange } from "@/utils/dateUtils";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [dateFilter, setDateFilter] = useState<DateFilterType>("all");
  const [customDateRange, setCustomDateRange] = useState<{ start?: Date; end?: Date }>({});

  const leads = [
    {
      id: "Z25060298",
      name: "Haren",
      company: "Avasar-NX",
      email: "haren.hm@gmail.com",
      phone: "9594049055",
      city: "Mumbai",
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
      city: "Delhi",
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
      city: "Pune",
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
      city: "Bangalore",
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
      city: "Nagpur",
      status: "In Progress",
      stage: "Post Sales Process",
      source: "Affiliate",
      assignedTo: "Riya Yadav",
      category: "Agriculture Equipment",
      businessType: "Offline and Online",
      createdAt: "20 May 2025",
      updatedAt: "30 May 2025",
      priority: "low"
    },
    {
      id: "Z25519975",
      name: "Sarah Johnson",
      company: "Tech Solutions Inc",
      email: "sarah.johnson@techsol.com",
      phone: "9876543210",
      city: "Chennai",
      status: "Cold",
      stage: "Not Interested",
      source: "Cold Call",
      assignedTo: "Mike Chen",
      category: "Software Development",
      businessType: "B2B Services",
      createdAt: "18 May 2025",
      updatedAt: "20 May 2025",
      priority: "low"
    },
    {
      id: "Z25518974",
      name: "Rajesh Kumar",
      company: "Digital Marketing Pro",
      email: "rajesh@digitalmarketing.in",
      phone: "8765432109",
      city: "Hyderabad",
      status: "In Progress",
      stage: "Answered and call back",
      source: "Website Form",
      assignedTo: "Priya Sharma",
      category: "Digital Marketing",
      businessType: "Online Services",
      createdAt: "15 May 2025",
      updatedAt: "01 Jun 2025",
      priority: "medium"
    },
    {
      id: "Z25517973",
      name: "Emily Davis",
      company: "Fashion Forward",
      email: "emily@fashionforward.com",
      phone: "7654321098",
      city: "Kolkata",
      status: "In Progress",
      stage: "Follow up",
      source: "Social Media",
      assignedTo: "Riya Yadav",
      category: "Fashion & Apparel",
      businessType: "E-commerce",
      createdAt: "12 May 2025",
      updatedAt: "29 May 2025",
      priority: "high"
    },
    {
      id: "Z25516972",
      name: "Ahmed Ali",
      company: "Construction Masters",
      email: "ahmed@constructionmasters.ae",
      phone: "6543210987",
      city: "Ahmedabad",
      status: "In Progress",
      stage: "Negotiation",
      source: "Referral",
      assignedTo: "Radhika Trivedi",
      category: "Construction Services",
      businessType: "Offline Services",
      createdAt: "10 May 2025",
      updatedAt: "31 May 2025",
      priority: "high"
    },
    {
      id: "Z25515971",
      name: "Maria Rodriguez",
      company: "Health & Wellness Co",
      email: "maria@healthwellness.com",
      phone: "5432109876",
      city: "Goa",
      status: "Cold",
      stage: "Not Interested",
      source: "Email Campaign",
      assignedTo: "Mike Chen",
      category: "Healthcare",
      businessType: "Hybrid",
      createdAt: "08 May 2025",
      updatedAt: "10 May 2025",
      priority: "low"
    },
    {
      id: "Z25514970",
      name: "David Thompson",
      company: "Auto Repair Plus",
      email: "david@autorepairplus.com",
      phone: "4321098765",
      city: "Jaipur",
      status: "In Progress",
      stage: "Answered and call back",
      source: "Google Ads",
      assignedTo: "Priya Sharma",
      category: "Automotive Services",
      businessType: "Local Business",
      createdAt: "05 May 2025",
      updatedAt: "03 Jun 2025",
      priority: "medium"
    },
    {
      id: "Z25513969",
      name: "Lisa Wang",
      company: "Educational Excellence",
      email: "lisa@eduexcellence.edu",
      phone: "3210987654",
      city: "Lucknow",
      status: "In Progress",
      stage: "New opportunity",
      source: "Partnership",
      assignedTo: "Riya Yadav",
      category: "Education",
      businessType: "Online Platform",
      createdAt: "01 May 2025",
      updatedAt: "04 Jun 2025",
      priority: "high"
    }
  ];

  const handleDateFilterChange = (filter: DateFilterType, startDate?: Date, endDate?: Date) => {
    setDateFilter(filter);
    if (filter === "custom" && startDate && endDate) {
      setCustomDateRange({ start: startDate, end: endDate });
    } else {
      setCustomDateRange({});
    }
  };

  const getFilteredLeadsByDate = () => {
    const { start, end } = getDateRange(dateFilter, customDateRange.start, customDateRange.end);
    
    return leads.filter(lead => {
      return isDateInRange(lead.createdAt, start, end);
    });
  };

  const filteredLeadsByDate = getFilteredLeadsByDate();

  const filteredLeads = filteredLeadsByDate.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || lead.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate filtered stats
  const filteredStats = {
    newLeads: filteredLeadsByDate.filter(lead => {
      const createdDate = new Date(lead.createdAt);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return createdDate > yesterday;
    }).length,
    totalLeads: filteredLeadsByDate.length,
    leadClosure: filteredLeadsByDate.filter(lead => lead.stage === "Lead Closure" || lead.status === "Completed").length,
    paymentInitiated: filteredLeadsByDate.filter(lead => lead.stage === "Payment Initiated").length,
    paymentCompleted: filteredLeadsByDate.filter(lead => lead.stage === "Payment completed").length,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <StatsSection 
          newLeads={filteredStats.newLeads}
          totalLeads={filteredStats.totalLeads}
          leadClosure={filteredStats.leadClosure}
          paymentInitiated={filteredStats.paymentInitiated}
          paymentCompleted={filteredStats.paymentCompleted}
        />
        <SidebarCards />
        
        {/* Combined filter section and action buttons */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <FilterSection 
            className="flex-grow" 
            onDateFilterChange={handleDateFilterChange}
          />
          
          <div className="flex flex-wrap gap-2">
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
