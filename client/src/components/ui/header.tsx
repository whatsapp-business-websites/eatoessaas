import { Menu } from "lucide-react";

interface HeaderProps {
  restaurantName: string;
  logo?: string;
  onMenuClick: () => void;
  isVisible?: boolean;
}

export function Header({ restaurantName, logo, onMenuClick, isVisible = true }: HeaderProps) {
  return (
    <header 
      className={`bg-white h-14 border-b border-gray-200 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {logo ? (
            <img 
              src={logo} 
              alt={`${restaurantName} logo`}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : null}
          <h1 className="text-lg font-semibold truncate">{restaurantName}</h1>
        </div>
        
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
} 