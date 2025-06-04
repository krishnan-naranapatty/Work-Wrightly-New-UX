import { Phone, MessageSquare, User, Calendar, RefreshCw, Store, CreditCard, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface Activity {
  id: number;
  type: string;
  title: string;
  status: string;
  comment: string;
  timestamp: string;
  user: string;
  hasCommentSection?: boolean;
  hasFormDetails?: boolean;
  statusOptions?: string[];
}

interface ActivityItemProps {
  activity: Activity;
  isLast: boolean;
}

const ActivityItem = ({ activity, isLast }: ActivityItemProps) => {
  const [newComment, setNewComment] = useState("");

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "phone":
        return <Phone className="h-4 w-4" />;
      case "message":
        return <MessageSquare className="h-4 w-4" />;
      case "lead":
        return <User className="h-4 w-4" />;
      case "store":
        return <Store className="h-4 w-4" />;
      case "payment":
        return <CreditCard className="h-4 w-4" />;
      case "process":
        return <Settings className="h-4 w-4" />;
      default:
        return <RefreshCw className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    if (status.includes("Not Interested") || status.includes("Not Approval")) {
      return "bg-red-100 text-red-800 border-red-200";
    }
    if (status.includes("didn't pick")) {
      return "bg-orange-100 text-orange-800 border-orange-200";
    }
    if (status.includes("In-Progress") || status.includes("Awaiting")) {
      return "bg-blue-100 text-blue-800 border-blue-200";
    }
    if (status.includes("Completed") || status.includes("created") || status.includes("Approval")) {
      return "bg-green-100 text-green-800 border-green-200";
    }
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  const handleSubmitComment = () => {
    console.log("Submitting comment:", newComment);
    setNewComment("");
  };

  return (
    <div className="flex space-x-4">
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

        {/* Status Options for Process type */}
        {activity.statusOptions && (
          <div className="mt-3 flex flex-wrap gap-2">
            {activity.statusOptions.map((option, index) => (
              <Badge 
                key={index}
                className={`cursor-pointer ${
                  option === activity.status 
                    ? getStatusColor(option)
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {option}
              </Badge>
            ))}
          </div>
        )}

        {/* Status Badge for non-process types */}
        {!activity.statusOptions && (
          <div className="mt-2">
            <Badge className={`${getStatusColor(activity.status)} text-xs font-medium`}>
              Status: {activity.status}
            </Badge>
          </div>
        )}

        {/* Existing Comment */}
        {activity.comment && (
          <div className="mt-2 flex items-start space-x-2">
            <MessageSquare className="h-4 w-4 text-gray-400 mt-0.5" />
            <div className="text-sm text-gray-600">
              <span className="font-medium">Comment:</span> {activity.comment}
            </div>
          </div>
        )}

        {/* Comment Section */}
        {activity.hasCommentSection && (
          <div className="mt-4 space-y-3">
            <div className="text-sm font-medium text-gray-900">Comment</div>
            <div className="flex space-x-2">
              <Textarea
                placeholder="Enter Your Comments"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 min-h-[80px] resize-none"
              />
              <Button 
                onClick={handleSubmitComment}
                className="bg-blue-600 hover:bg-blue-700 text-white self-end"
              >
                Submit
              </Button>
            </div>
          </div>
        )}

        {/* Form Details Button */}
        {activity.hasFormDetails && (
          <div className="mt-3">
            <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
              Form Details
            </Button>
          </div>
        )}

        {/* Divider */}
        {!isLast && (
          <div className="mt-6 border-t border-gray-200"></div>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
