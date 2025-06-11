
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface FilterDialogProps {
  children: React.ReactNode;
  onApplyFilters?: (filters: FilterValues) => void;
}

interface FilterValues {
  fullName: string;
  companyName: string;
  assignedUserGroup: string;
  assignedUser: string;
  leadSource: string;
  stage: string;
  status: string;
  previousActivity: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  typeOfBusiness: string;
  currentSelling: string;
  launchYourWebsite: Date | undefined;
}

const FilterDialog = ({ children, onApplyFilters }: FilterDialogProps) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FilterValues>({
    fullName: "",
    companyName: "",
    assignedUserGroup: "",
    assignedUser: "",
    leadSource: "",
    stage: "",
    status: "",
    previousActivity: "",
    createdAt: undefined,
    updatedAt: undefined,
    typeOfBusiness: "",
    currentSelling: "",
    launchYourWebsite: undefined,
  });

  const handleClearFilter = () => {
    setFilters({
      fullName: "",
      companyName: "",
      assignedUserGroup: "",
      assignedUser: "",
      leadSource: "",
      stage: "",
      status: "",
      previousActivity: "",
      createdAt: undefined,
      updatedAt: undefined,
      typeOfBusiness: "",
      currentSelling: "",
      launchYourWebsite: undefined,
    });
  };

  const handleSubmit = () => {
    onApplyFilters?.(filters);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 py-4">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <Input
              value={filters.fullName}
              onChange={(e) => setFilters(prev => ({ ...prev, fullName: e.target.value }))}
              placeholder="Enter full name"
            />
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Company Name</label>
            <Input
              value={filters.companyName}
              onChange={(e) => setFilters(prev => ({ ...prev, companyName: e.target.value }))}
              placeholder="Enter company name"
            />
          </div>

          {/* Assigned User Group */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Assigned User Group</label>
            <Select value={filters.assignedUserGroup} onValueChange={(value) => setFilters(prev => ({ ...prev, assignedUserGroup: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales Team</SelectItem>
                <SelectItem value="marketing">Marketing Team</SelectItem>
                <SelectItem value="support">Support Team</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Assigned User */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Assigned User</label>
            <Select value={filters.assignedUser} onValueChange={(value) => setFilters(prev => ({ ...prev, assignedUser: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select user" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="riya">Riya Yadav</SelectItem>
                <SelectItem value="radhika">Radhika Trivedi</SelectItem>
                <SelectItem value="mike">Mike Chen</SelectItem>
                <SelectItem value="priya">Priya Sharma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lead Source */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Lead Source</label>
            <Select value={filters.leadSource} onValueChange={(value) => setFilters(prev => ({ ...prev, leadSource: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="website">Website Form</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="cold-call">Cold Call</SelectItem>
                <SelectItem value="email">Email Campaign</SelectItem>
                <SelectItem value="affiliate">Affiliate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Stage */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Stage</label>
            <Select value={filters.stage} onValueChange={(value) => setFilters(prev => ({ ...prev, stage: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-opportunity">New Opportunity</SelectItem>
                <SelectItem value="post-sales-process">Post Sales Process</SelectItem>
                <SelectItem value="payment-completed">Payment Completed</SelectItem>
                <SelectItem value="follow-up">Follow Up</SelectItem>
                <SelectItem value="negotiation">Negotiation</SelectItem>
                <SelectItem value="not-interested">Not Interested</SelectItem>
                <SelectItem value="answered-and-call-back">Answered and Call Back</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="cold">Cold</SelectItem>
                <SelectItem value="hot">Hot</SelectItem>
                <SelectItem value="warm">Warm</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Previous Activity */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Previous Activity</label>
            <Select value={filters.previousActivity} onValueChange={(value) => setFilters(prev => ({ ...prev, previousActivity: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select activity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="call">Phone Call</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="meeting">Meeting</SelectItem>
                <SelectItem value="message">Message</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Created At */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Created At</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.createdAt ? format(filters.createdAt, "PPP") : "All Time"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={filters.createdAt}
                  onSelect={(date) => setFilters(prev => ({ ...prev, createdAt: date }))}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Updated At */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Updated At</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.updatedAt ? format(filters.updatedAt, "PPP") : "All Time"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={filters.updatedAt}
                  onSelect={(date) => setFilters(prev => ({ ...prev, updatedAt: date }))}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Type Of Business */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Type Of Business</label>
            <Input
              value={filters.typeOfBusiness}
              onChange={(e) => setFilters(prev => ({ ...prev, typeOfBusiness: e.target.value }))}
              placeholder="Enter business type"
            />
          </div>

          {/* Current Selling */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Current Selling</label>
            <Input
              value={filters.currentSelling}
              onChange={(e) => setFilters(prev => ({ ...prev, currentSelling: e.target.value }))}
              placeholder="Enter current selling"
            />
          </div>

          {/* Launch Your Website */}
          <div className="space-y-2 col-span-2">
            <label className="text-sm font-medium text-gray-700">Launch Your Website</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.launchYourWebsite ? format(filters.launchYourWebsite, "PPP") : "All Time"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={filters.launchYourWebsite}
                  onSelect={(date) => setFilters(prev => ({ ...prev, launchYourWebsite: date }))}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={handleClearFilter}>
            Clear Filter
          </Button>
          <Button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
