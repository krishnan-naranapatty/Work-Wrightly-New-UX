
import { Plus, Download, Settings, Upload, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button className="text-white bg-blue-500 px-4 py-2 rounded text-sm">DASHBOARD</button>
              <button className="text-gray-300 hover:text-white text-sm">LEADS</button>
              <button className="text-gray-300 hover:text-white text-sm">ROLES</button>
              <button className="text-gray-300 hover:text-white text-sm">MY TEAM</button>
              <button className="text-gray-300 hover:text-white text-sm">SETTINGS</button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Mobile Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-slate-600">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-slate-700 border-slate-600">
                <div className="flex flex-col space-y-4 mt-8">
                  <button className="text-white bg-blue-500 px-4 py-3 rounded text-sm text-left">DASHBOARD</button>
                  <button className="text-gray-300 hover:text-white text-sm px-4 py-3 text-left">LEADS</button>
                  <button className="text-gray-300 hover:text-white text-sm px-4 py-3 text-left">ROLES</button>
                  <button className="text-gray-300 hover:text-white text-sm px-4 py-3 text-left">MY TEAM</button>
                  <button className="text-gray-300 hover:text-white text-sm px-4 py-3 text-left">SETTINGS</button>
                </div>
              </SheetContent>
            </Sheet>
            
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
              <Settings className="h-4 w-4" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-slate-600">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-slate-600 text-white">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white">
                <DropdownMenuItem className="cursor-pointer">
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
