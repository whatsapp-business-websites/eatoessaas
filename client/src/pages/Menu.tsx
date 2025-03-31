import { useState, useMemo, useEffect, useRef } from "react";
import { CartNotification } from "@/components/ui/cart-notification";
import { Header } from "@/components/ui/header";
import { Sidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { SynchronizedMenuView } from "@/components/ui/synchronized-menu-view";
import { MenuItemCard } from "@/components/ui/menu-item-card";
import { MenuControls, MenuType } from "@/components/ui/menu-controls";
import { MenuFilter } from "@/components/ui/menu-filter";

interface CartItem {
  id: number;
  quantity: number;
}

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
  image: string;
  items: MenuItem[];
}

interface MenuData {
  restaurantName: string;
  deliveryTime: string;
  categories: MenuCategory[];
}

interface SynchronizedMenuViewProps {
  categories: MenuCategory[];
  className?: string;
  onUpdateCart?: (item: MenuItem, quantity: number) => void;
  showHeader?: boolean;
}

// Sample menu data for different menu types
const menuTypesData: Record<MenuType, MenuData> = {
  food: {
    restaurantName: "Adil Hotel",
    deliveryTime: "35-40 mins",
    categories: [
      {
        id: "recommended",
        name: "Recommended",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=100&h=100&fit=crop",
        items: [
          {
            id: 1,
            name: "Butter Chicken",
            description: "Tender chicken cooked in a rich, creamy tomato-based curry sauce with butter and aromatic spices",
            price: 320,
            isVegetarian: false,
            isBestseller: true,
            spicyLevel: 2,
            isCustomizable: true,
            // No image for this dish
          },
          {
            id: 2,
            name: "Paneer Tikka Masala",
            description: "Grilled cottage cheese cubes in a creamy, spiced tomato gravy",
            price: 280,
            isVegetarian: true,
            isChefRecommended: true,
            spicyLevel: 1,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 3,
            name: "Andhra Style Chicken Curry",
            description: "Fiery hot chicken curry made with traditional Andhra spices and red chilies",
            price: 340,
            isVegetarian: false,
            spicyLevel: 3,
            isCustomizable: true,
            // No image for this dish
          },
          {
            id: 4,
            name: "Dal Makhani",
            description: "Creamy black lentils slow-cooked overnight with mild spices",
            price: 220,
            isVegetarian: true,
            isBestseller: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 5,
            name: "Hyderabadi Biryani",
            description: "Aromatic basmati rice layered with tender meat and signature spices",
            price: 380,
            isVegetarian: false,
            isChefRecommended: true,
            spicyLevel: 2,
            isCustomizable: true,
            // No image for this dish
          },
          {
            id: 6,
            name: "Palak Paneer",
            description: "Fresh cottage cheese cubes in a creamy spinach gravy",
            price: 260,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ]
      },
      {
        id: "main-courses",
        name: "Main Courses",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=100&h=100&fit=crop",
        items: [
          {
            id: 7,
            name: "Chicken Curry",
            description: "In this easy Indian chicken curry chicken breasts are simmered in an aromatic tomato-based sauce until tender.",
            price: 129,
            isVegetarian: false,
            isBestseller: true,
            spicyLevel: 2,
            isCustomizable: true,
            // No image for this dish
          },
          {
            id: 8,
            name: "Paneer Makhani",
            description: "Cottage cheese in rich, creamy tomato sauce with aromatic spices",
            price: 224,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 9,
            name: "Chicken Biryani",
            description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices",
            price: 299,
            isVegetarian: false,
            isBestseller: true,
            spicyLevel: 2,
            isCustomizable: true,
            // No image for this dish
          },
          {
            id: 10,
            name: "Malai Kofta",
            description: "Soft potato and paneer dumplings in a rich creamy gravy",
            price: 239,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 11,
            name: "Fish Curry",
            description: "Fresh fish pieces cooked in a tangy coconut-based curry",
            price: 299,
            isVegetarian: false,
            spicyLevel: 1,
            isCustomizable: true,
            // No image for this dish
          },
          {
            id: 12,
            name: "Chana Masala",
            description: "Chickpeas cooked with onions, tomatoes and traditional spices",
            price: 189,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ],
      },
      {
        id: "starters",
        name: "Starters",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=100&h=100&fit=crop",
        items: [
          {
            id: 13,
            name: "Samosa",
            description: "Crispy pastry filled with spiced potatoes and peas",
            price: 80,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 14,
            name: "Chicken 65",
            description: "Spicy deep-fried chicken marinated in special spices",
            price: 180,
            isVegetarian: false,
            spicyLevel: 2,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ]
      },
      {
        id: "breads",
        name: "Breads",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop",
        items: [
          {
            id: 17,
            name: "Butter Naan",
            description: "Freshly baked Indian bread with butter",
            price: 60,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 18,
            name: "Garlic Cheese Naan",
            description: "Naan stuffed with garlic and cheese",
            price: 80,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 19,
            name: "Tandoori Roti",
            description: "Whole wheat bread baked in tandoor",
            price: 40,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ]
      },
      {
        id: "snacks",
        name: "Snacks",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop",
        items: [
          {
            id: 23,
            name: "Bhel Puri",
            description: "Crispy puffed rice with tangy chutneys",
            price: 100,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 24,
            name: "Pani Puri",
            description: "Hollow crisp with spicy water",
            price: 120,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 25,
            name: "Dahi Puri",
            description: "Crisp puri with yogurt and chutneys",
            price: 110,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ]
      },
      {
        id: "desserts",
        name: "Desserts",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=100&h=100&fit=crop",
        items: [
          {
            id: 15,
            name: "Gulab Jamun",
            description: "Sweet milk dumplings soaked in sugar syrup",
            price: 120,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 16,
            name: "Rasmalai",
            description: "Soft cottage cheese dumplings in sweet milk",
            price: 140,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ]
      }
    ]
  },
  drinks: {
    restaurantName: "Adil Hotel",
    deliveryTime: "35-40 mins",
    categories: [
      {
        id: "beverages",
        name: "Beverages",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=100&h=100&fit=crop",
        items: [
          {
            id: 20,
            name: "Mango Lassi",
            description: "Sweet yogurt drink with mango pulp",
            price: 120,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 21,
            name: "Masala Chai",
            description: "Traditional spiced Indian tea",
            price: 60,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 22,
            name: "Fresh Lime Soda",
            description: "Refreshing lime drink with mint",
            price: 80,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ]
      }
    ]
  },
  desserts: {
    restaurantName: "Adil Hotel",
    deliveryTime: "35-40 mins",
    categories: [
      {
        id: "desserts",
        name: "Desserts",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=100&h=100&fit=crop",
        items: [
          {
            id: 15,
            name: "Gulab Jamun",
            description: "Sweet milk dumplings soaked in sugar syrup",
            price: 120,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          },
          {
            id: 16,
            name: "Rasmalai",
            description: "Soft cottage cheese dumplings in sweet milk",
            price: 140,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ]
      }
    ]
  },
  special: {
    restaurantName: "Adil Hotel",
    deliveryTime: "35-40 mins",
    categories: [
      {
        id: "daily-specials",
        name: "Daily Specials",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=100&h=100&fit=crop",
        items: [
          {
            id: 26,
            name: "Chef's Special Thali",
            description: "A complete meal with variety of dishes",
            price: 450,
            isVegetarian: true,
            isCustomizable: true,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fh2dxv9fh4ply41m9tom"
          }
        ]
      }
    ]
  }
};

export default function Menu() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentMenuType, setCurrentMenuType] = useState<MenuType>('food');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState(false);
  const [nonVegFilter, setNonVegFilter] = useState(false);
  const isMobile = useIsMobile();
  
  // Simplified scroll state management
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only show header when at the very top (scroll position = 0)
      setShowHeader(currentScrollY === 0);
      
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleUpdateCart = (item: any, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        if (quantity === 0) {
          return prev.filter(cartItem => cartItem.id !== item.id);
        }
        return prev.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        );
      }
      if (quantity === 0) return prev;
      return [...prev, { id: item.id, quantity }];
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleMenuTypeChange = (type: MenuType) => {
    setCurrentMenuType(type);
  };

  const filteredCategories = useMemo(() => {
    const menuData = menuTypesData[currentMenuType];
    let filteredItems = menuData.categories;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredItems = filteredItems.map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        )
      })).filter(category => category.items.length > 0);
    }

    // Apply dietary filters
    if (vegFilter || nonVegFilter) {
      filteredItems = filteredItems.map(category => ({
        ...category,
        items: category.items.filter(item => 
          (vegFilter && item.isVegetarian) || (nonVegFilter && !item.isVegetarian)
        )
      })).filter(category => category.items.length > 0);
    }

    return filteredItems;
  }, [currentMenuType, searchQuery, vegFilter, nonVegFilter]);

  const handleFilterChange = (filter: 'all' | 'veg' | 'non-veg') => {
    switch (filter) {
      case 'veg':
        setVegFilter(true);
        setNonVegFilter(false);
        break;
      case 'non-veg':
        setVegFilter(false);
        setNonVegFilter(true);
        break;
      case 'all':
        setVegFilter(false);
        setNonVegFilter(false);
        break;
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => {
    const menuItem = Object.values(menuTypesData)
      .flatMap(data => data.categories)
      .flatMap(cat => cat.items)
      .find(menuItem => menuItem.id === item.id);
    return sum + (menuItem?.price ?? 0) * item.quantity;
  }, 0);

  const restaurantInfo = {
    name: menuTypesData[currentMenuType].restaurantName,
    address: "123 Main Street, City, State 12345",
    openingTime: "11:00 AM",
    closingTime: "11:00 PM",
    description: "Serving authentic Indian cuisine with love since 1995. Known for our traditional recipes and warm hospitality."
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Layout */}
      {isMobile && (
        <div className="flex flex-col min-h-screen">
          {/* Header Container - Has conditional visibility via prop */}
          <div className="fixed inset-x-0 top-0 z-30">
            <Header 
              restaurantName={menuTypesData[currentMenuType].restaurantName}
              logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsU0UkkQef5LeD9zRb94BZycu3DdF-ky8SA&s"
              onMenuClick={() => setIsSidebarOpen(true)}
              isVisible={showHeader}
            />
          </div>

          {/* Menu Controls - Always fixed and visible regardless of scroll */}
          <div 
            className="fixed inset-x-0 z-20 bg-white transition-all duration-300"
            style={{ 
              top: showHeader ? '56px' : '0px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              height: '56px' // Explicitly set height
            }}
          >
            <MenuControls
              onSearch={handleSearch}
              onMenuTypeChange={handleMenuTypeChange}
              currentMenuType={currentMenuType}
            />
          </div>

          {/* Mobile Sidebar */}
          <Sidebar 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            restaurantInfo={restaurantInfo}
          />

          {/* Main Content with dynamic padding */}
          <main className={`flex-1 transition-all duration-300 ${
            showHeader ? 'pt-[184px]' : 'pt-[128px]'
          } ${totalItems > 0 ? 'pb-32' : 'pb-16'}`}>
            <SynchronizedMenuView 
              categories={filteredCategories}
              className="min-h-full"
              onUpdateCart={handleUpdateCart}
              showHeader={showHeader}
            />
          </main>

          {/* Bottom Fixed Container */}
          <div className="fixed inset-x-0 bottom-0">
            {/* Filter Component - Moves up when cart is present */}
            <div className={`w-full bg-white border-t border-gray-200 transition-transform duration-300 ${
              totalItems > 0 ? 'transform -translate-y-[44px]' : ''
            }`}>
              <div className="px-4 py-2">
                <MenuFilter
                  currentFilter={vegFilter ? 'veg' : nonVegFilter ? 'non-veg' : 'all'}
                  onFilterChange={handleFilterChange}
                />
              </div>
            </div>

            {/* Cart Notification */}
            {totalItems > 0 && (
              <div className="w-full bg-white">
                <CartNotification 
                  itemCount={totalItems}
                  totalAmount={totalAmount}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      {!isMobile && (
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-[280px] border-r border-gray-200 bg-white overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsU0UkkQef5LeD9zRb94BZycu3DdF-ky8SA&s"
                  alt={`${menuTypesData[currentMenuType].restaurantName} logo`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h1 className="text-xl font-bold">{menuTypesData[currentMenuType].restaurantName}</h1>
              </div>
              
              {restaurantInfo.description && (
                <p className="text-gray-600 mb-4">{restaurantInfo.description}</p>
              )}

              {restaurantInfo.address && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-sm text-gray-600">{restaurantInfo.address}</p>
                </div>
              )}

              {(restaurantInfo.openingTime || restaurantInfo.closingTime) && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Opening Hours</h3>
                  <p className="text-sm text-gray-600">
                    {restaurantInfo.openingTime} - {restaurantInfo.closingTime}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <main className={`flex-1 transition-all duration-300 ${
            totalItems > 0 ? 'pb-40' : 'pb-24'
          }`}>
            <SynchronizedMenuView 
              categories={filteredCategories}
              className="h-full"
              onUpdateCart={handleUpdateCart}
            />
          </main>

          {/* Bottom Container with Filter and Cart */}
          <div className={`fixed left-0 right-0 bottom-0 z-40 bg-white flex flex-col transition-all duration-300`}>
            {/* Menu Filter */}
            <div className="w-full border-t border-gray-200">
              <div className="container mx-auto px-4 py-2">
                <MenuFilter
                  currentFilter={vegFilter ? 'veg' : nonVegFilter ? 'non-veg' : 'all'}
                  onFilterChange={handleFilterChange}
                />
              </div>
            </div>

            {/* Cart Notification */}
            {totalItems > 0 && (
              <div className="w-full">
                <CartNotification 
                  itemCount={totalItems}
                  totalAmount={totalAmount}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 