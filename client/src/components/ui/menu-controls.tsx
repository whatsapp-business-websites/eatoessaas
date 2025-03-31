import { useState } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { cn } from '@/lib/utils';

export type MenuType = 'food' | 'drinks' | 'desserts' | 'special';

interface MenuControlsProps {
  onSearch: (query: string) => void;
  onMenuTypeChange: (type: MenuType) => void;
  currentMenuType: MenuType;
}

export function MenuControls({ onSearch, onMenuTypeChange, currentMenuType }: MenuControlsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const menuTypeLabels: Record<MenuType, string> = {
    food: 'Food Menu',
    drinks: 'Drinks Menu',
    desserts: 'Desserts Menu',
    special: 'Special Menu'
  };

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full h-10 pl-10 pr-4 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-10 flex items-center gap-2 whitespace-nowrap border-gray-300"
              >
                {menuTypeLabels[currentMenuType]}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] bg-white border-gray-300">
              {Object.entries(menuTypeLabels).map(([type, label]) => (
                <DropdownMenuItem
                  key={type}
                  onClick={() => onMenuTypeChange(type as MenuType)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 text-base",
                    currentMenuType === type && "bg-gray-100"
                  )}
                >
                  <span>{label}</span>
                  {currentMenuType === type && (
                    <Check className="w-4 h-4 ml-auto" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
} 