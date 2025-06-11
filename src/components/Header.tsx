
import { Menu, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <div className="text-white cursor-pointer" onClick={() => navigate("/")}>
              <div className="text-lg font-bold leading-tight">WORK</div>
              <div className="text-lg font-bold leading-tight">WRIGHTLY</div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => handleNavigation("/")}
                className={`px-4 py-2 rounded text-sm ${
                  isActive("/") 
                    ? "text-white bg-blue-500" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                DASHBOARD
              </button>
              <button 
                onClick={() => handleNavigation("/leads")}
                className={`px-4 py-2 rounded text-sm ${
                  isActive("/leads") 
                    ? "text-white bg-blue-500" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                LEADS
              </button>
              <button 
                onClick={() => handleNavigation("/forms")}
                className={`px-4 py-2 rounded text-sm ${
                  isActive("/forms") 
                    ? "text-white bg-blue-500" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                FORMS
              </button>
              <button className="text-gray-300 hover:text-white text-sm">USERS</button>
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
                  <button 
                    onClick={() => handleNavigation("/")}
                    className={`px-4 py-3 rounded text-sm text-left ${
                      isActive("/") 
                        ? "text-white bg-blue-500" 
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    DASHBOARD
                  </button>
                  <button 
                    onClick={() => handleNavigation("/leads")}
                    className={`px-4 py-3 rounded text-sm text-left ${
                      isActive("/leads") 
                        ? "text-white bg-blue-500" 
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    LEADS
                  </button>
                  <button 
                    onClick={() => handleNavigation("/forms")}
                    className={`px-4 py-3 rounded text-sm text-left ${
                      isActive("/forms") 
                        ? "text-white bg-blue-500" 
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    FORMS
                  </button>
                  <button className="text-gray-300 hover:text-white text-sm px-4 py-3 text-left">USERS</button>
                  <button className="text-gray-300 hover:text-white text-sm px-4 py-3 text-left">MY TEAM</button>
                  <button className="text-gray-300 hover:text-white text-sm px-4 py-3 text-left">SETTINGS</button>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* Settings and user profile - keeping these in the header */}
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
