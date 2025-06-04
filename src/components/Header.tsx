
import { Search, Filter, Plus, Download, Settings, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <div className="bg-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <div className="text-white">
              <div className="text-lg font-bold leading-tight">WORK</div>
              <div className="text-lg font-bold leading-tight">WRIGHTLY</div>
            </div>
            <nav className="flex space-x-6">
              <button className="text-white bg-blue-500 px-4 py-2 rounded text-sm">DASHBOARD</button>
              <button className="text-gray-300 hover:text-white text-sm">LEADS</button>
              <button className="text-gray-300 hover:text-white text-sm">ROLES</button>
              <button className="text-gray-300 hover:text-white text-sm">MY TEAM</button>
              <button className="text-gray-300 hover:text-white text-sm">SETTINGS</button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Add
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
              <Upload className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
              <Filter className="h-4 w-4" />
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search a lead..."
                className="pl-10 w-48 bg-white"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
