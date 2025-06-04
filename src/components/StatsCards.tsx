
import { TrendingUp, Users, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Lead {
  status: string;
  priority: string;
}

interface StatsCardsProps {
  leads: Lead[];
}

const StatsCards = ({ leads }: StatsCardsProps) => {
  const totalLeads = leads.length;
  const inProgressLeads = leads.filter(lead => lead.status === "In Progress").length;
  const completedLeads = leads.filter(lead => lead.status === "Completed").length;
  const highPriorityLeads = leads.filter(lead => lead.priority === "high").length;

  const stats = [
    {
      title: "Total Leads",
      value: totalLeads,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      change: "+12%"
    },
    {
      title: "In Progress",
      value: inProgressLeads,
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      change: "+8%"
    },
    {
      title: "Completed",
      value: completedLeads,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
      change: "+15%"
    },
    {
      title: "High Priority",
      value: highPriorityLeads,
      icon: TrendingUp,
      color: "text-red-600",
      bgColor: "bg-red-100",
      change: "-3%"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
