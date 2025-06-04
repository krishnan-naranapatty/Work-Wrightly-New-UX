
import { Phone, MessageSquare, User, Calendar, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Activity {
  id: number;
  type: string;
  title: string;
  status: string;
  comment: string;
  timestamp: string;
  user: string;
}

interface ActivityItemProps {
  activity: Activity;
  isLast: boolean;
}

const ActivityItem = ({ activity, isLast }: ActivityItemProps) => {
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
        {!isLast && (
          <div className="mt-4 border-t border-gray-200"></div>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
