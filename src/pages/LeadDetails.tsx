import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import LeadHeader from "@/components/LeadHeader";
import ActivityTimeline from "@/components/ActivityTimeline";
import TimelineSidebar from "@/components/TimelineSidebar";

const LeadDetails = () => {
  const { id } = useParams();

  // Mock lead data - in a real app this would come from an API
  const lead = {
    id: "Z25060298",
    name: "Haren",
    company: "Avasar-NX",
    email: "haren@gmail.com",
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
  };

  const activities = [
    {
      id: 1,
      type: "process",
      title: "Post Sales Process by - Riya Yadav",
      status: "Awaiting for Website Requirements",
      comment: "",
      timestamp: "02 Jun 2025 - 05:27 PM",
      user: "R",
      hasCommentSection: true,
      statusOptions: [
        "Website Requirement Approval",
        "Website Requirement Not Approval", 
        "Awaiting for Website Requirements"
      ]
    },
    {
      id: 2,
      type: "process",
      title: "Post Sales Process by - Riya Yadav",
      status: "Awaiting for Website Requirements",
      comment: "Website is under designing",
      timestamp: "02 Jun 2025 - 05:25 PM",
      user: "R",
      hasCommentSection: false
    },
    {
      id: 3,
      type: "store",
      title: "Already Store Created by - Riya Yadav",
      status: "Let's start Post Sales Process",
      comment: "",
      timestamp: "02 Jun 2025 - 05:24 PM",
      user: "R",
      hasCommentSection: false
    },
    {
      id: 4,
      type: "store",
      title: "Create a store by - Riya Yadav",
      status: "The store has already been created",
      comment: "Store has been created",
      timestamp: "02 Jun 2025 - 04:58 PM",
      user: "R",
      hasCommentSection: false
    },
    {
      id: 5,
      type: "payment",
      title: "Others by - Radhika Trivedi",
      status: "Payment was Completed",
      comment: "",
      timestamp: "02 Jun 2025 - 04:57 PM",
      user: "R",
      hasFormDetails: true,
      hasCommentSection: false
    },
    {
      id: 6,
      type: "phone",
      title: "Phone Call by - Radhika Trivedi",
      status: "Customer was Not Interested during Phone Call",
      comment: "cx isnt interested at the moment to purchase",
      timestamp: "07 Apr 2025 - 02:25 PM",
      user: "R",
      hasCommentSection: false
    },
    {
      id: 7,
      type: "phone",
      title: "Phone Call by - Radhika Trivedi",
      status: "Customer didn't pick the phone call",
      comment: "",
      timestamp: "07 Apr 2025 - 02:24 PM",
      user: "R",
      hasCommentSection: false
    },
    {
      id: 8,
      type: "lead",
      title: "New Lead by - Radhika Trivedi",
      status: "Calling In-Progress",
      comment: "",
      timestamp: "07 Apr 2025 - 12:58 PM",
      user: "R",
      hasCommentSection: false
    }
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </div>

          {/* Lead Header */}
          <LeadHeader lead={lead} />

          {/* Timeline Summary - Horizontal */}
          <TimelineSidebar activities={activities} showOnlyTimeline={true} />

          {/* Recent Activities */}
          <TimelineSidebar activities={activities} showOnlyRecent={true} />

          {/* Activity Timeline */}
          <ActivityTimeline activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
