
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FilterSection = () => {
  return (
    <div className="mb-4 flex items-center gap-3">
      <Select>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="View leads for all roles" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">View leads for all roles</SelectItem>
          <SelectItem value="developer">Developer roles</SelectItem>
          <SelectItem value="support">Support roles</SelectItem>
        </SelectContent>
      </Select>
      
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        Filter
      </Button>
    </div>
  );
};

export default FilterSection;
