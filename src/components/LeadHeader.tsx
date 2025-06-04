
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
    <Card className="mb-6">
      <CardHeader>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Avatar className="h-12 w-12 sm:h-16 sm:w-16 bg-blue-100 mx-auto sm:mx-0">
              <AvatarFallback className="bg-blue-600 text-white font-semibold text-base sm:text-lg">
                {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Lead Form V2 - {lead.name}
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-0">
                <span>ID: {lead.id}</span>
                <span className="hidden sm:inline">•</span>
                <span>{lead.company}</span>
                <span className="hidden sm:inline">•</span>
                <span className="break-all">{lead.email}</span>
                <span className="hidden sm:inline">•</span>
                <span>{lead.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end space-x-2">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm">
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
