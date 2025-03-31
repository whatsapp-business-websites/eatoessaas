import { Badge } from "./badge";
import { useState } from "react";

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
  onUpdateCart?: (quantity: number) => void;
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
  onUpdateCart,
}: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateCart?.(newQuantity);
  };

  const handleReduce = () => {
    const newQuantity = Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    onUpdateCart?.(newQuantity);
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

  return (
    <div className="flex items-start gap-4 border-b border-gray-200 py-3">
      {/* Left side content */}
      <div className="flex-1">
        {/* Veg/Non-veg marker and tags */}
        <div className="flex items-center gap-2 mb-1">
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
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
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5">
              Bestseller
            </Badge>
          )}
          {isChefRecommended && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-[10px] px-1.5 py-0.5">
              Chef's Special
            </Badge>
          )}
        </div>

        {/* Name */}
        <div className="mb-1">
          <h3 className="text-base font-medium text-gray-800">{name}</h3>
        </div>

        {/* Price */}
        <div className="mb-2">
          <span className="font-medium">₹{price}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 pr-4 mb-1">{description}</p>

        {/* Spicy Level */}
        {renderSpicyLevel()}
      </div>

      {/* Right side with image and add button */}
      <div className="w-[100px] flex flex-col items-center">
        {image ? (
          <>
            <div className="w-[100px] h-[80px] rounded-lg overflow-hidden mb-2">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-[80px]">
              {quantity === 0 ? (
                <button 
                  onClick={handleAdd}
                  className="w-full py-1.5 px-3 bg-white text-black border border-black rounded text-sm font-medium hover:bg-gray-50"
                >
                  ADD
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
                    {quantity}
                  </span>
                  <button 
                    onClick={handleAdd}
                    className="px-2 py-0.5 text-white text-base font-medium hover:bg-gray-900"
                  >
                    +
                  </button>
                </div>
              )}
              {isCustomizable && (
                <div className="text-center mt-0.5">
                  <span className="text-[10px] text-gray-400">Customisable</span>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex justify-center mt-2">
            {quantity === 0 ? (
              <button 
                onClick={handleAdd}
                className="py-1.5 px-6 bg-white text-black border border-black rounded text-sm font-medium hover:bg-gray-50"
              >
                ADD
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
                  {quantity}
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
  );
} 