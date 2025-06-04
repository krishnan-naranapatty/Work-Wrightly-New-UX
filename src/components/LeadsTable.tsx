
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

interface LeadsTableProps {
  leads: Lead[];
}

const LeadsTable = ({ leads }: LeadsTableProps) => {
  return (
    <div className="flex-1 max-w-4xl">
      <Card>
        <CardContent className="p-0">
          <div className="bg-gray-50 px-6 py-3 border-b">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
              <div className="col-span-3">Lead Name</div>
              <div className="col-span-2">Lead Progress</div>
              <div className="col-span-7">Lead Details</div>
            </div>
          </div>
          
          {leads.map((lead) => (
            <div key={lead.id} className="px-6 py-4 border-b hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{lead.name}</div>
                    <div className="text-sm text-gray-500">last contact: {lead.updatedAt}</div>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <span key={star} className="text-green-500">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{lead.priority === "high" ? "80%" : "60%"} progress</div>
                </div>
                
                <div className="col-span-7">
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Messages (9)</div>
                      <div className="text-gray-500">Phone (2)</div>
                      <div className="text-gray-500">Live meeting (1)</div>
                      <div className="text-gray-500">Notes (3)</div>
                    </div>
                    <div className="col-span-3">
                      <div className="text-gray-900">{lead.stage}</div>
                      <div className="text-sm text-gray-500">{lead.assignedTo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-6 text-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              SHOW MORE LEADS
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadsTable;
