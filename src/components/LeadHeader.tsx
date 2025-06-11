
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
  city: string;
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
      <CardHeader className="p-3 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 sm:space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 bg-blue-100 mx-auto sm:mx-0">
              <AvatarFallback className="bg-blue-600 text-white font-semibold text-sm sm:text-base lg:text-lg">
                {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <CardTitle className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900">
                Lead Form V2 - {lead.name}
              </CardTitle>
              <div className="text-xs text-gray-600 mt-1 break-words">
                ID: {lead.id}, {lead.company}, {lead.city}, {lead.email}, {lead.phone}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end space-x-2">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              Comments
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default LeadHeader;
