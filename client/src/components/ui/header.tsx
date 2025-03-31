import { Menu } from "lucide-react";

export interface HeaderProps {
  restaurantName: string;
  logo: string;
  onMenuClick: () => void;
  className?: string;
  isVisible?: boolean;
}

export function Header({ 
  restaurantName, 
  logo, 
  onMenuClick, 
  className = '',
  isVisible = true,
}: HeaderProps) {
  
  return (
    <header 
      className={`bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${className}`}
    >
      <div className="h-14 flex items-center px-4">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 text-gray-600 hover:text-gray-900"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-3 ml-2">
          <img
            src={logo}
            alt={`${restaurantName} logo`}
            className="w-8 h-8 rounded-full object-cover"
          />
          <h1 className="text-lg font-semibold">{restaurantName}</h1>
        </div>
      </div>
    </header>
  );
} 