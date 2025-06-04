
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ActivityItem from "./ActivityItem";

interface Activity {
  id: number;
  type: string;
  title: string;
  status: string;
  comment: string;
  timestamp: string;
  user: string;
}

interface ActivityTimelineProps {
  activities: Activity[];
}

const ActivityTimeline = ({ activities }: ActivityTimelineProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 py-4">
          {activities.map((activity, index) => (
            <ActivityItem 
              key={activity.id} 
              activity={activity} 
              isLast={index === activities.length - 1}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
