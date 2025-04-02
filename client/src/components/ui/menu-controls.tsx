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
import { Category } from '@/services/menuService';

interface MenuControlsProps {
  onSearch: (query: string) => void;
  onMenuTypeChange: (categoryId: string) => void;
  currentMenuType: string;
  categories: Category[];
}

export function MenuControls({ onSearch, onMenuTypeChange, currentMenuType, categories }: MenuControlsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 relative z-[100]">
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
          
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-10 flex items-center gap-2 whitespace-nowrap border-gray-300 relative z-[100]"
              >
                {categories.find(cat => cat._id === currentMenuType)?.category.slice(0, 30) + (categories.find(cat => cat._id === currentMenuType)?.category.length > 30 ? '...' : '') || 'Select Category'}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-[280px] bg-white border-gray-300 z-[200]"
              forceMount={isOpen}
            >
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category._id}
                  onClick={() => {
                    onMenuTypeChange(category._id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 text-base",
                    currentMenuType === category._id && "bg-gray-100"
                  )}
                >
                  <span className="truncate max-w-[240px]">{category.category}</span>
                  {currentMenuType === category._id && (
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