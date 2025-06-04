
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, MessageSquare, User, Calendar, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "phone":
        return <Phone className="h-4 w-4" />;
      case "message":
        return <MessageSquare className="h-4 w-4" />;
      case "lead":
        return <User className="h-4 w-4" />;
      default:
        return <RefreshCw className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    if (status.includes("Not Interested")) {
      return "bg-red-100 text-red-800 border-red-200";
    }
    if (status.includes("didn't pick")) {
      return "bg-orange-100 text-orange-800 border-orange-200";
    }
    if (status.includes("In-Progress")) {
      return "bg-blue-100 text-blue-800 border-blue-200";
    }
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

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

        {/* Lead Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16 bg-blue-100">
                  <AvatarFallback className="bg-blue-600 text-white font-semibold text-lg">
                    {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Lead Form V2 - {lead.name}
                  </CardTitle>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span>ID: {lead.id}</span>
                    <span>•</span>
                    <span>{lead.company}</span>
                    <span>•</span>
                    <span>{lead.email}</span>
                    <span>•</span>
                    <span>{lead.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Comments
                </Button>
                <Button variant="outline" size="icon">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Activity Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={activity.id} className="flex space-x-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <Avatar className="h-10 w-10 bg-blue-100">
                      <AvatarFallback className="bg-blue-600 text-white font-semibold">
                        {activity.user}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getActivityIcon(activity.type)}
                        <h3 className="text-sm font-medium text-gray-900">
                          {activity.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{activity.timestamp}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mt-2">
                      <Badge className={`${getStatusColor(activity.status)} text-xs font-medium`}>
                        Status: {activity.status}
                      </Badge>
                    </div>

                    {/* Comment */}
                    {activity.comment && (
                      <div className="mt-2 flex items-start space-x-2">
                        <MessageSquare className="h-4 w-4 text-gray-400 mt-0.5" />
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Comment:</span> {activity.comment}
                        </div>
                      </div>
                    )}

                    {/* Divider */}
                    {index < activities.length - 1 && (
                      <div className="mt-4 border-t border-gray-200"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadDetails;
