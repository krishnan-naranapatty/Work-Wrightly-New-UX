
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FilterSection = () => {
  return (
    <div className="mb-4 flex items-center gap-3">
      <Select>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="View leads for all users" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">View leads for all users</SelectItem>
          <SelectItem value="developer">Developer roles</SelectItem>
          <SelectItem value="support">Support roles</SelectItem>
        </SelectContent>
      </Select>
      
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        Filter
      </Button>

      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search a lead..."
          className="pl-10 bg-white"
        />
      </div>
    </div>
  );
};

export default FilterSection;
