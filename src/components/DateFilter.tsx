
import { useState } from "react";
import { Calendar, ChevronDown, Globe } from "lucide-react";
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
    <div className={cn("relative", className)}>
      {/* Page-wide Filter Header */}
      <div className="mb-3 flex items-center gap-2">
        <Globe className="h-4 w-4 text-blue-600" />
        <div>
          <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
            Page Filter
          </span>
          <p className="text-xs text-gray-600 mt-0.5">
            Applies to all data, stats, and tables on this page
          </p>
        </div>
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="h-12 px-6 text-base font-medium bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Calendar className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-gray-700 font-semibold">
              {getFilterLabel()}
            </span>
            <ChevronDown className="h-4 w-4 ml-3 text-blue-600" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="start" 
          className="w-56 bg-white border-2 border-blue-200 shadow-xl z-50"
        >
          {dateFilterOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleFilterSelect(option.value)}
              className={cn(
                "cursor-pointer px-4 py-3 text-sm font-medium transition-colors",
                selectedFilter === option.value 
                  ? "bg-blue-100 text-blue-700 font-semibold" 
                  : "hover:bg-gray-50"
              )}
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
          <PopoverContent className="w-auto p-0 bg-white border-2 border-blue-200 shadow-xl z-50" align="start">
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Start Date</label>
                <CalendarComponent
                  mode="single"
                  selected={customStartDate}
                  onSelect={setCustomStartDate}
                  className={cn("p-3 pointer-events-auto")}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">End Date</label>
                <CalendarComponent
                  mode="single"
                  selected={customEndDate}
                  onSelect={setCustomEndDate}
                  className={cn("p-3 pointer-events-auto")}
                />
              </div>
              <Button 
                onClick={handleCustomDateApply} 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
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
