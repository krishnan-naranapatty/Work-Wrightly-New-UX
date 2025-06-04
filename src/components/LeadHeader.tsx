
import { RefreshCw, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: string;
  stage: string;
  source: string;
  assignedTo: string;
  category: string;
  businessType: string;
  createdAt: string;
  updatedAt: string;
  priority: string;
}

interface LeadHeaderProps {
  lead: Lead;
}

const LeadHeader = ({ lead }: LeadHeaderProps) => {
  return (
    <Card className="mb-6 h-full flex flex-col">
      <CardHeader className="flex-1 p-6">
        <div className="flex items-center justify-between h-full">
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
  );
};

export default LeadHeader;
