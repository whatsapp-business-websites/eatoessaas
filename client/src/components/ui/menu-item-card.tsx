import { Badge } from "./badge";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getFullVideoUrl } from "@/services/menuService";

interface Variety {
  name: string;
  price: string;
  type: string;
}

interface MenuItemCardProps {
  name: string;
  description: string;
  price: number;
  isVegetarian: boolean;
  isBestseller?: boolean;
  isChefRecommended?: boolean;
  spicyLevel?: 1 | 2 | 3;
  isCustomizable?: boolean;
  image?: string;
  video?: string;
  onUpdateCart?: (quantity: number, selectedVariety?: Variety) => void;
  varietyArr?: Variety[];
}

export function MenuItemCard({
  name,
  description,
  price,
  isVegetarian,
  isBestseller,
  isChefRecommended,
  spicyLevel,
  isCustomizable = true,
  image,
  video,
  onUpdateCart,
  varietyArr = []
}: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [varietyQuantities, setVarietyQuantities] = useState<Record<string, number>>({});

  const hasVarieties = varietyArr && varietyArr.length > 0;
  const lowestPrice = hasVarieties 
    ? Math.min(...varietyArr.map(v => parseFloat(v.price)))
    : price;

  const handleAdd = () => {
    if (hasVarieties) {
      setIsExpanded(!isExpanded);
      return;
    }
    
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateCart?.(newQuantity);
  };

  const handleReduce = () => {
    if (hasVarieties) {
      setIsExpanded(false);
      return;
    }
    const newQuantity = Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    onUpdateCart?.(newQuantity);
  };

  const handleVarietyAdd = (variety: Variety) => {
    const newQuantity = (varietyQuantities[variety.name] || 0) + 1;
    setVarietyQuantities(prev => ({
      ...prev,
      [variety.name]: newQuantity
    }));
    onUpdateCart?.(newQuantity, variety);
  };

  const handleVarietyReduce = (variety: Variety) => {
    const newQuantity = Math.max(0, (varietyQuantities[variety.name] || 0) - 1);
    setVarietyQuantities(prev => ({
      ...prev,
      [variety.name]: newQuantity
    }));
    onUpdateCart?.(newQuantity, variety);
  };

  const renderSpicyLevel = () => {
    if (!spicyLevel) return null;
    return (
      <div className="flex items-center gap-0.5 mb-1">
        {[...Array(spicyLevel)].map((_, index) => (
          <span key={index} className="text-sm">🌶️</span>
        ))}
      </div>
    );
  };

  const totalQuantity = hasVarieties 
    ? Object.values(varietyQuantities).reduce((sum, qty) => sum + qty, 0)
    : quantity;

  const renderMedia = () => {
    if (video) {
      return (
        <div className="w-[120px] h-[100px] rounded-lg overflow-hidden mb-2">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={getFullVideoUrl(video)} type="video/mp4" />
          </video>
        </div>
      );
    }
    
    if (image) {
      return (
        <div className="w-[120px] h-[100px] rounded-lg overflow-hidden mb-2">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex items-start gap-4 py-3">
        {/* Left side content */}
        <div className="flex-1 min-w-0">
          {/* Veg/Non-veg marker and tags */}
          <div className="flex items-center gap-2 mb-1">
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <rect 
                x="1" 
                y="1" 
                width="14" 
                height="14" 
                stroke={isVegetarian ? "#00A877" : "#E43B4F"}
                strokeWidth="2"
              />
              <circle 
                cx="8" 
                cy="8" 
                r="4" 
                fill={isVegetarian ? "#00A877" : "#E43B4F"}
              />
            </svg>
            {isBestseller && (
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 flex-shrink-0">
                Bestseller
              </Badge>
            )}
            {isChefRecommended && (
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-[10px] px-1.5 py-0.5 flex-shrink-0">
                Chef's Special
              </Badge>
            )}
          </div>

          {/* Name */}
          <div className="mb-1">
            <h3 className="text-base font-medium text-gray-800 truncate">{name}</h3>
          </div>

          {/* Price */}
          {hasVarieties ? (
            <div className="mb-2">
              <span className="text-sm text-gray-500">Starting from</span>
              <span className="font-medium ml-1">₹{lowestPrice}</span>
            </div>
          ) : (
            parseFloat(price.toString()) > 0 && (
              <div className="mb-2">
                <span className="font-medium">₹{price}</span>
              </div>
            )
          )}

          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2 mb-1">{description}</p>

          {/* Spicy Level */}
          {renderSpicyLevel()}
        </div>

        {/* Right side with media and add button */}
        <div className="w-[120px] flex flex-col items-center flex-shrink-0">
          {(video || image) ? (
            <>
              {renderMedia()}
              <div className="w-[80px]">
                {totalQuantity === 0 ? (
                  <button 
                    onClick={handleAdd}
                    className="w-full py-1.5 px-3 bg-white text-black border border-black rounded text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-1"
                  >
                    {hasVarieties ? "SELECT" : "ADD"}
                    {hasVarieties && (isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                  </button>
                ) : (
                  <div className="flex items-center justify-between w-full bg-black border border-black rounded">
                    <button 
                      onClick={handleReduce}
                      className="px-2 py-0.5 text-white text-base font-medium hover:bg-gray-900"
                    >
                      −
                    </button>
                    <span className="text-base text-white font-medium">
                      {totalQuantity}
                    </span>
                    <button 
                      onClick={handleAdd}
                      className="px-2 py-0.5 text-white text-base font-medium hover:bg-gray-900"
                    >
                      +
                    </button>
                  </div>
                )}
                {hasVarieties && (
                  <div className="text-center mt-0.5">
                    <span className="text-[10px] text-gray-400">Customisable</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex justify-center mt-2">
              {totalQuantity === 0 ? (
                <button 
                  onClick={handleAdd}
                  className="py-1.5 px-6 bg-white text-black border border-black rounded text-sm font-medium hover:bg-gray-50 flex items-center gap-1"
                >
                  {hasVarieties ? "SELECT" : "ADD"}
                  {hasVarieties && (isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                </button>
              ) : (
                <div className="flex items-center justify-between w-[80px] bg-black border border-black rounded">
                  <button 
                    onClick={handleReduce}
                    className="px-2 py-0.5 text-white text-base font-medium hover:bg-gray-900"
                  >
                    −
                  </button>
                  <span className="text-base text-white font-medium">
                    {totalQuantity}
                  </span>
                  <button 
                    onClick={handleAdd}
                    className="px-2 py-0.5 text-white text-base font-medium hover:bg-gray-900"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Varieties Section */}
      {hasVarieties && isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50">
          {varietyArr.map((variety, index) => (
            <div key={index} className="flex items-start gap-4 py-3 px-4">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-800 truncate">{variety.name}</h4>
                {parseFloat(variety.price) > 0 && (
                  <div className="mt-1">
                    <span className="font-medium">₹{variety.price}</span>
                  </div>
                )}
              </div>
              <div className="w-[80px] flex-shrink-0">
                {varietyQuantities[variety.name] === 0 ? (
                  <button 
                    onClick={() => handleVarietyAdd(variety)}
                    className="w-full py-1.5 px-3 bg-white text-black border border-black rounded text-sm font-medium hover:bg-gray-50"
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center justify-between w-full bg-black border border-black rounded">
                    <button 
                      onClick={() => handleVarietyReduce(variety)}
                      className="px-2 py-0.5 text-white text-base font-medium hover:bg-gray-900"
                    >
                      −
                    </button>
                    <span className="text-base text-white font-medium">
                      {varietyQuantities[variety.name]}
                    </span>
                    <button 
                      onClick={() => handleVarietyAdd(variety)}
                      className="px-2 py-0.5 text-white text-base font-medium hover:bg-gray-900"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 