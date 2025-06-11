
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FilterDialog from "./FilterDialog";

interface FilterSectionProps {
  className?: string;
}

const FilterSection = ({ className = "" }: FilterSectionProps) => {
  const handleApplyFilters = (filters: any) => {
    console.log("Applied filters:", filters);
    // Here you would typically update the leads table with the applied filters
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
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
      
      <FilterDialog onApplyFilters={handleApplyFilters}>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </FilterDialog>

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
