
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const FilterPanel = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="new-opportunity">New Opportunity</SelectItem>
            <SelectItem value="affiliate">Affiliate</SelectItem>
            <SelectItem value="combined">Combined Lead Source</SelectItem>
            <SelectItem value="organic">Organic Search</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Assigned To" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Users</SelectItem>
            <SelectItem value="riya-yadav">Riya Yadav</SelectItem>
            <SelectItem value="radhika-trivedi">Radhika Trivedi</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="wedding">Wedding Materials</SelectItem>
            <SelectItem value="perfumes">Premium Perfumes</SelectItem>
            <SelectItem value="garage">Garage and Repair</SelectItem>
            <SelectItem value="food">Food and Beverages</SelectItem>
            <SelectItem value="agriculture">Agriculture Equipment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            High Priority
            <X className="h-3 w-3 cursor-pointer hover:text-red-600" />
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            Riya Yadav
            <X className="h-3 w-3 cursor-pointer hover:text-red-600" />
          </Badge>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Clear All
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
