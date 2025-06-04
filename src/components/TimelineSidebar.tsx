
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, User, Store, CreditCard, Settings } from "lucide-react";

interface Activity {
  id: number;
  type: string;
  title: string;
  status: string;
  timestamp: string;
}

interface TimelineSidebarProps {
  activities: Activity[];
}

const TimelineSidebar = ({ activities }: TimelineSidebarProps) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "phone":
        return <Phone className="h-3 w-3" />;
      case "message":
        return <MessageSquare className="h-3 w-3" />;
      case "lead":
        return <User className="h-3 w-3" />;
      case "store":
        return <Store className="h-3 w-3" />;
      case "payment":
        return <CreditCard className="h-3 w-3" />;
      case "process":
        return <Settings className="h-3 w-3" />;
      default:
        return <Settings className="h-3 w-3" />;
    }
  };

  const getStatusColor = (status: string) => {
    if (status.includes("Not Interested") || status.includes("Not Approval")) {
      return "bg-red-100 text-red-800";
    }
    if (status.includes("didn't pick")) {
      return "bg-orange-100 text-orange-800";
    }
    if (status.includes("In-Progress") || status.includes("Awaiting")) {
      return "bg-blue-100 text-blue-800";
    }
    if (status.includes("Completed") || status.includes("created") || status.includes("Approval")) {
      return "bg-green-100 text-green-800";
    }
    return "bg-gray-100 text-gray-800";
  };

  const activityCounts = activities.reduce((acc, activity) => {
    acc[activity.type] = (acc[activity.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const recentActivities = activities.slice(0, 5);

  return (
    <div className="w-80 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Timeline Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm mb-2">Activity Count</h4>
            <div className="space-y-2">
              {Object.entries(activityCounts).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    {getActivityIcon(type)}
                    <span className="capitalize">{type}</span>
                  </div>
                  <span className="text-gray-500">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="space-y-1">
                <div className="flex items-center space-x-2">
                  {getActivityIcon(activity.type)}
                  <span className="text-sm font-medium truncate">{activity.type}</span>
                </div>
                <Badge className={`${getStatusColor(activity.status)} text-xs`}>
                  {activity.status}
                </Badge>
                <p className="text-xs text-gray-500">{activity.timestamp}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineSidebar;
