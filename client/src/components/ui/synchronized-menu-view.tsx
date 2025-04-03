import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MenuItemCard } from "./menu-item-card";
import { MenuItem, Category } from "@/services/menuService";

export interface MenuCategory {
  _id: string;
  category: string;
  cloudinary_url: string;
  publish: number;
  isActive: boolean;
  openTime?: string;
  closeTime?: string;
  items: MenuItem[];
}

export interface SynchronizedMenuViewProps {
  categories: MenuCategory[];
  className?: string;
  onUpdateCart?: (item: MenuItem, quantity: number) => void;
  showHeader?: boolean;
}

export function SynchronizedMenuView({ categories, className, onUpdateCart, showHeader = true }: SynchronizedMenuViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?._id || "");
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);
  const tabBarRef = useRef<HTMLDivElement>(null);

  // Function to scroll tab into view
  const scrollTabIntoView = (categoryId: string) => {
    if (!tabBarRef.current) return;
    
    const activeTab = tabBarRef.current.querySelector(`[data-category-tab="${categoryId}"]`);
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  // Initialize intersection observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: showHeader ? "-112px 0px -80% 0px" : "-56px 0px -80% 0px", // Adjust based on header visibility
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isScrollingRef.current) {
          setActiveCategory(entry.target.id);
          scrollTabIntoView(entry.target.id);
        }
      });
    }, options);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [showHeader]);

  // Observe category sections
  useEffect(() => {
    if (!contentRef.current || !observerRef.current) return;

    const sections = contentRef.current.querySelectorAll("[data-category-section]");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });
  }, [categories]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const sections = contentRef.current.querySelectorAll("[data-category-section]");
      const headerOffset = showHeader ? 112 : 56; // Adjust based on header visibility
      const tabOffset = 72; // Tab bar height
      const totalOffset = headerOffset + tabOffset;

      let currentSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - totalOffset);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section;
        }
      });

      if (currentSection && !isScrollingRef.current) {
        setActiveCategory(currentSection.id);
        scrollTabIntoView(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showHeader]);

  const scrollToCategory = (categoryId: string) => {
    const section = contentRef.current?.querySelector(`[data-category-section="${categoryId}"]`);
    if (section) {
      isScrollingRef.current = true;
      setActiveCategory(categoryId);
      scrollTabIntoView(categoryId);

      const headerOffset = showHeader ? 112 : 56; // Adjust based on header visibility
      const tabOffset = 72; // Tab bar height
      const totalOffset = headerOffset + tabOffset;
      
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <div className={cn("w-full flex flex-col", className)}>
      {/* Fixed Tab Bar */}
      <div 
        className="fixed left-0 right-0 z-[90] bg-white border-b border-gray-200 transition-all duration-300"
        style={{
          top: showHeader ? '112px' : '56px',
          pointerEvents: 'auto',
          height: '72px'
        }}
      >
        <div ref={tabBarRef} className="flex overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category._id}
              data-category-tab={category._id}
              onClick={() => scrollToCategory(category._id)}
              className={cn(
                "flex flex-col items-center px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors min-w-[80px]",
                activeCategory === category._id
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mb-1 mt-4">
                <img 
                  src={category.cloudinary_url} 
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[13px] text-center max-w-[80px]">
                {category.category.split(' ').reduce((lines: string[], word) => {
                  const lastLine = lines[lines.length - 1] || '';
                  if (lastLine.length + word.length <= 10) {
                    lines[lines.length - 1] = lastLine ? `${lastLine} ${word}` : word;
                  } else if (lines.length < 3) {
                    lines.push(word);
                  }
                  return lines;
                }, ['']).map((line, index) => (
                  <span key={index} className="block truncate">{line}</span>
                ))}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div ref={contentRef} className={`flex-1 transition-all duration-300 ${
        showHeader ? 'pt-[104px]' : 'pt-[104px]'
      }`}>
        <div className="px-4">
          {categories.map((category) => (
            <div
              key={category._id}
              id={category._id}
              data-category-section={category._id}
              className="py-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-xl font-bold">{category.category}</h2>
              </div>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <MenuItemCard
                    key={item._id}
                    name={item.itemName}
                    description={item.description}
                    price={parseFloat(item.price)}
                    isVegetarian={item.type === 'veg' || item.type === 'na'}
                    isBestseller={false}
                    isChefRecommended={item.chefRecommend}
                    spicyLevel={undefined}
                    isCustomizable={true}
                    image={item.image}
                    video={item.video}
                    varietyArr={item.varietyArr}
                    onUpdateCart={(quantity, selectedVariety) => onUpdateCart?.(
                      selectedVariety ? { ...item, price: selectedVariety.price } : item, 
                      quantity
                    )}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 