
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

interface LeadsTableProps {
  leads: Lead[];
}

const TruncatedText = ({ text, maxLength = 20 }: { text: string; maxLength?: number }) => {
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help truncate block">
            {text.substring(0, maxLength)}...
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const LeadsTable = ({ leads }: LeadsTableProps) => {
  const navigate = useNavigate();

  const getProgressValue = (priority: string) => {
    switch (priority) {
      case "high": return 80;
      case "medium": return 60;
      case "low": return 30;
      default: return 50;
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage.toLowerCase()) {
      case "post sales process":
        return {
          bgColor: "bg-blue-50",
          borderColor: "border-l-blue-500",
          textColor: "text-blue-700",
          dotColor: "bg-blue-500"
        };
      case "payment completed":
        return {
          bgColor: "bg-green-50",
          borderColor: "border-l-green-500",
          textColor: "text-green-700",
          dotColor: "bg-green-500"
        };
      case "new opportunity":
        return {
          bgColor: "bg-purple-50",
          borderColor: "border-l-purple-500",
          textColor: "text-purple-700",
          dotColor: "bg-purple-500"
        };
      case "follow up":
        return {
          bgColor: "bg-orange-50",
          borderColor: "border-l-orange-500",
          textColor: "text-orange-700",
          dotColor: "bg-orange-500"
        };
      case "negotiation":
        return {
          bgColor: "bg-yellow-50",
          borderColor: "border-l-yellow-500",
          textColor: "text-yellow-700",
          dotColor: "bg-yellow-500"
        };
      case "not interested":
        return {
          bgColor: "bg-red-50",
          borderColor: "border-l-red-500",
          textColor: "text-red-700",
          dotColor: "bg-red-500"
        };
      case "answered and call back":
        return {
          bgColor: "bg-teal-50",
          borderColor: "border-l-teal-500",
          textColor: "text-teal-700",
          dotColor: "bg-teal-500"
        };
      default:
        return {
          bgColor: "bg-gray-50",
          borderColor: "border-l-gray-500",
          textColor: "text-gray-700",
          dotColor: "bg-gray-500"
        };
    }
  };

  const handleLeadClick = (leadId: string) => {
    navigate(`/lead/${leadId}`);
  };

  return (
    <div className="flex-1 max-w-4xl">
      <Card>
        <CardContent className="p-0">
          {/* Desktop Header */}
          <div className="bg-gray-50 px-6 py-3 border-b hidden md:block">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
              <div className="col-span-4">Lead Name</div>
              <div className="col-span-2">Lead Progress</div>
              <div className="col-span-6">Lead Details</div>
            </div>
          </div>
          
          {leads.map((lead) => {
            const progressValue = getProgressValue(lead.priority);
            const stageColors = getStageColor(lead.stage);
            
            return (
              <div 
                key={lead.id} 
                className={`px-4 md:px-6 py-4 border-b border-l-4 hover:bg-gray-50 cursor-pointer transition-colors ${stageColors.bgColor} ${stageColors.borderColor}`}
                onClick={() => handleLeadClick(lead.id)}
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-4 flex items-center space-x-3 min-h-[80px]">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-900 truncate">
                        <TruncatedText text={lead.name} maxLength={20} />
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        <TruncatedText text={lead.email} maxLength={25} />
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        <TruncatedText text={lead.phone} maxLength={15} />
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        <TruncatedText text={lead.city} maxLength={15} />
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        last contact: {lead.updatedAt}
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="space-y-2">
                      <Progress 
                        value={progressValue} 
                        className="h-2"
                      />
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{progressValue}% progress</div>
                  </div>
                  
                  <div className="col-span-6">
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Messages (9)</div>
                        <div className="text-gray-500">Phone (2)</div>
                        <div className="text-gray-500">Live meeting (1)</div>
                        <div className="text-gray-500">Notes (3)</div>
                      </div>
                      <div className="col-span-3 min-w-0">
                        <div className={`flex items-center space-x-2 ${stageColors.textColor}`}>
                          <div className={`w-2 h-2 rounded-full ${stageColors.dotColor} flex-shrink-0`}></div>
                          <span className="font-medium truncate">
                            <TruncatedText text={lead.stage} maxLength={20} />
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1 truncate">
                          <TruncatedText text={lead.assignedTo} maxLength={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">
                        <TruncatedText text={lead.name} maxLength={20} />
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        <TruncatedText text={lead.email} maxLength={25} />
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        <TruncatedText text={lead.phone} maxLength={15} />
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        <TruncatedText text={lead.city} maxLength={15} />
                      </div>
                      <div className={`flex items-center space-x-2 ${stageColors.textColor}`}>
                        <div className={`w-2 h-2 rounded-full ${stageColors.dotColor} flex-shrink-0`}></div>
                        <span className="text-sm font-medium truncate">
                          <TruncatedText text={lead.stage} maxLength={20} />
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Progress</span>
                      <span className="text-sm text-gray-500">{progressValue}%</span>
                    </div>
                    <Progress 
                      value={progressValue} 
                      className="h-2"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                    <div>Messages (9)</div>
                    <div>Phone (2)</div>
                    <div>Live meeting (1)</div>
                    <div>Notes (3)</div>
                  </div>
                  
                  <div className="text-sm">
                    <div className="text-gray-500 truncate">
                      Assigned to: <TruncatedText text={lead.assignedTo} maxLength={15} />
                    </div>
                    <div className="text-gray-500">Last contact: {lead.updatedAt}</div>
                  </div>
                </div>
              </div>
            );
          })}
          
          <div className="p-4 md:p-6 text-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">
              SHOW MORE LEADS
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadsTable;
