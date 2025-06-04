
import { useState } from "react";
import { Phone, Mail, Building, Calendar, User, MoreVertical, Edit, Trash2, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

interface LeadCardProps {
  lead: Lead;
}

const LeadCard = ({ lead }: LeadCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <Avatar className="h-12 w-12 bg-blue-100">
              <AvatarFallback className="bg-blue-600 text-white font-semibold">
                {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {lead.name}
                </h3>
                <Badge className={`${getStatusColor(lead.status)} text-xs font-medium`}>
                  {lead.status}
                </Badge>
                <Badge className={`${getPriorityColor(lead.priority)} text-xs font-medium`}>
                  {lead.priority}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4 text-gray-400" />
                  <span className="truncate">{lead.company}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="truncate">{lead.email}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{lead.phone}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="truncate">{lead.assignedTo}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  {lead.stage}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {lead.source}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {lead.category}
                </Badge>
              </div>

              {isExpanded && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Business Type:</span>
                      <p className="text-gray-600 mt-1">{lead.businessType}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Lead ID:</span>
                      <p className="text-gray-600 mt-1">{lead.id}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Created:</span>
                      <p className="text-gray-600 mt-1">{lead.createdAt}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Last Updated:</span>
                      <p className="text-gray-600 mt-1">{lead.updatedAt}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Eye className="h-4 w-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white">
                <DropdownMenuItem className="hover:bg-gray-50">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Lead
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-red-50 text-red-600">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Lead
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadCard;
