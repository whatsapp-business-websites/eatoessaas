import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MenuItemCard } from "./menu-item-card";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  isVegetarian: boolean;
  isBestseller?: boolean;
  isChefRecommended?: boolean;
  spicyLevel?: 1 | 2 | 3;
  isCustomizable?: boolean;
  image?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  image?: string;
}

interface SynchronizedMenuViewProps {
  categories: MenuCategory[];
  className?: string;
  onUpdateCart?: (item: MenuItem, quantity: number) => void;
  showHeader?: boolean;
}

export function SynchronizedMenuView({ categories, className, onUpdateCart, showHeader = true }: SynchronizedMenuViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || "");
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
        className="fixed left-0 right-0 z-10 bg-white border-b border-gray-200 transition-all duration-300"
        style={{
          top: showHeader ? '112px' : '56px', // Dynamic positioning based on header visibility
        }}
      >
        <div ref={tabBarRef} className="flex overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              data-category-tab={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={cn(
                "flex flex-col items-center px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                activeCategory === category.id
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-12 h-12 rounded-full object-cover mb-1 mt-4"
              />
              <span className="text-[13px] text-center">
                {category.name.split(' ').map((word, index) => (
                  <span key={index} className="block">{word}</span>
                ))}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div ref={contentRef} className={`flex-1 transition-all duration-300 ${
        showHeader ? 'pt-[72px]' : 'pt-[72px]'
      }`}>
        <div className="px-4">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              data-category-section={category.id}
              className="py-2"
            >
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-xl font-bold">{category.name}</h2>
              </div>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    isVegetarian={item.isVegetarian}
                    isBestseller={item.isBestseller}
                    isChefRecommended={item.isChefRecommended}
                    spicyLevel={item.spicyLevel}
                    isCustomizable={item.isCustomizable}
                    image={item.image}
                    onUpdateCart={(quantity) => onUpdateCart?.(item, quantity)}
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