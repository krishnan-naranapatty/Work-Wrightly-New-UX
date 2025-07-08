
import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export type DateFilterType = "all" | "today" | "wtd" | "mtd" | "ytd" | "custom";

interface DateFilterProps {
  onFilterChange: (filter: DateFilterType, startDate?: Date, endDate?: Date) => void;
  className?: string;
}

const DateFilter = ({ onFilterChange, className }: DateFilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState<DateFilterType>("all");
  const [customStartDate, setCustomStartDate] = useState<Date>();
  const [customEndDate, setCustomEndDate] = useState<Date>();
  const [showCustomCalendar, setShowCustomCalendar] = useState(false);

  const dateFilterOptions = [
    { value: "all" as const, label: "Show All" },
    { value: "today" as const, label: "Today" },
    { value: "wtd" as const, label: "WTD" },
    { value: "mtd" as const, label: "MTD" },
    { value: "ytd" as const, label: "YTD" },
    { value: "custom" as const, label: "Custom" },
  ];

  const handleFilterSelect = (filter: DateFilterType) => {
    setSelectedFilter(filter);
    if (filter !== "custom") {
      onFilterChange(filter);
    } else {
      setShowCustomCalendar(true);
    }
  };

  const handleCustomDateApply = () => {
    if (customStartDate && customEndDate) {
      onFilterChange("custom", customStartDate, customEndDate);
      setShowCustomCalendar(false);
    }
  };

  const getFilterLabel = () => {
    const option = dateFilterOptions.find(opt => opt.value === selectedFilter);
    if (selectedFilter === "custom" && customStartDate && customEndDate) {
      return `${format(customStartDate, "MMM dd")} - ${format(customEndDate, "MMM dd")}`;
    }
    return option?.label || "Show All";
  };

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {getFilterLabel()}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {dateFilterOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleFilterSelect(option.value)}
              className={selectedFilter === option.value ? "bg-accent" : ""}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedFilter === "custom" && (
        <Popover open={showCustomCalendar} onOpenChange={setShowCustomCalendar}>
          <PopoverTrigger asChild>
            <div />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date</label>
                <CalendarComponent
                  mode="single"
                  selected={customStartDate}
                  onSelect={setCustomStartDate}
                  className={cn("p-3 pointer-events-auto")}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">End Date</label>
                <CalendarComponent
                  mode="single"
                  selected={customEndDate}
                  onSelect={setCustomEndDate}
                  className={cn("p-3 pointer-events-auto")}
                />
              </div>
              <Button onClick={handleCustomDateApply} className="w-full">
                Apply Custom Range
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default DateFilter;
