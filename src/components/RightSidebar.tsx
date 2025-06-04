
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RightSidebar = () => {
  return (
    <div className="w-64 space-y-6 flex-shrink-0">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-3">Lead Stage</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Not Interested</span>
              <span className="text-gray-500">23 leads</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Post Sale Process</span>
              <span className="text-gray-500">21 leads</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Answered & Call Back</span>
              <span className="text-gray-500">16 leads</span>
            </div>
          </div>
          <Button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-sm">
            Add a new role
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-3">Payment Initiated</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span className="text-sm">Adrian Robinson</span>
              </div>
              <span className="text-xs text-gray-500">15 leads</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span className="text-sm">Teddy Smith</span>
              </div>
              <span className="text-xs text-gray-500">13 leads</span>
            </div>
          </div>
          <Button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-sm">
            Invite a new member
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
