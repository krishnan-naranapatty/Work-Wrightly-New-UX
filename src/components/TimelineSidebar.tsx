
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
  showOnlyTimeline?: boolean;
  showOnlyRecent?: boolean;
}

const TimelineSidebar = ({ activities, showOnlyTimeline = false, showOnlyRecent = false }: TimelineSidebarProps) => {
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
        return <Settings className="h-4 w-4" />;
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

  if (showOnlyTimeline) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Timeline Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h4 className="font-medium text-sm mb-3">Activity Count</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Object.entries(activityCounts).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between text-sm p-3 bg-gray-50 rounded">
                  <div className="flex flex-col items-center space-y-1">
                    {getActivityIcon(type)}
                    <span className="capitalize text-xs">{type}</span>
                  </div>
                  <span className="text-gray-500 font-medium">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showOnlyRecent) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="space-y-1 p-3 bg-gray-50 rounded">
                <div className="flex items-center space-x-2">
                  {getActivityIcon(activity.type)}
                  <span className="text-sm font-medium truncate capitalize">{activity.type}</span>
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
    );
  }

  // Default: show both (fallback for existing usage)
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Timeline Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm mb-3">Activity Count</h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(activityCounts).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    {getActivityIcon(type)}
                    <span className="capitalize">{type}</span>
                  </div>
                  <span className="text-gray-500 font-medium">{count}</span>
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
              <div key={activity.id} className="space-y-1 p-2 bg-gray-50 rounded">
                <div className="flex items-center space-x-2">
                  {getActivityIcon(activity.type)}
                  <span className="text-sm font-medium truncate capitalize">{activity.type}</span>
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
