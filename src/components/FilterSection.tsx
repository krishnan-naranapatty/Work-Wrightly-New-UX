
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FilterSection = () => {
  return (
    <div className="mb-4">
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
    </div>
  );
};

export default FilterSection;
