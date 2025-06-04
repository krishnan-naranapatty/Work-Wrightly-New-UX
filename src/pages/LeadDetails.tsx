
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import LeadHeader from "@/components/LeadHeader";
import ActivityTimeline from "@/components/ActivityTimeline";

const LeadDetails = () => {
  const { id } = useParams();

  // Mock lead data - in a real app this would come from an API
  const lead = {
    id: "Z25060298",
    name: "Kumud Mangla",
    company: "Avasar-NX",
    email: "kumud.mangla@gmail.com",
    phone: "9594049055",
    status: "In Progress",
    stage: "Post Sales Process",
    source: "New Opportunity",
    assignedTo: "Radhika Trivedi",
    category: "wedding materials",
    businessType: "offline store",
    createdAt: "02 Jun 2025",
    updatedAt: "02 Jun 2025",
    priority: "high"
  };

  const activities = [
    {
      id: 1,
      type: "phone",
      title: "Phone Call by - Radhika Trivedi",
      status: "Customer was Not Interested during Phone Call",
      comment: "cx isnt interested at the moment to purchase",
      timestamp: "07 Apr 2025 - 02:25 PM",
      user: "R"
    },
    {
      id: 2,
      type: "phone",
      title: "Phone Call by - Radhika Trivedi",
      status: "Customer didn't pick the phone call",
      comment: "",
      timestamp: "07 Apr 2025 - 02:24 PM",
      user: "R"
    },
    {
      id: 3,
      type: "lead",
      title: "New Lead by - Radhika Trivedi",
      status: "Calling In-Progress",
      comment: "",
      timestamp: "07 Apr 2025 - 12:58 PM",
      user: "R"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        <LeadHeader lead={lead} />
        <ActivityTimeline activities={activities} />
      </div>
    </div>
  );
};

export default LeadDetails;
