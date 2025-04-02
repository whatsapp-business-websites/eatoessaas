import { useState, useMemo, useEffect, useRef } from "react";
import { useParams } from "wouter";
import { CartNotification } from "@/components/ui/cart-notification";
import { Header } from "@/components/ui/header";
import { Sidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { SynchronizedMenuView, MenuCategory } from "@/components/ui/synchronized-menu-view";
import { MenuItemCard } from "@/components/ui/menu-item-card";
import { MenuControls } from "@/components/ui/menu-controls";
import { MenuFilter } from "@/components/ui/menu-filter";
import { fetchMenu, MenuData, MenuItem, Category, SubCategory, getFullImageUrl } from "@/services/menuService";

interface CartItem {
  id: string;
  quantity: number;
  price: string;
  name: string;
}

export default function Menu() {
  const params = useParams();
  const restaurantName = params?.restaurantName as string | undefined;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState(false);
  const [nonVegFilter, setNonVegFilter] = useState(false);
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  // Simplified scroll state management
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const loadMenu = async () => {
      if (!restaurantName) {
        setError('Restaurant name is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetchMenu(restaurantName);
        setMenuData(response.body.menuitems);
        // Set the first category as selected by default
        if (response.body.menuitems.categories.length > 0) {
          setSelectedCategoryId(response.body.menuitems.categories[0]._id);
        }
      } catch (err) {
        setError('Failed to load menu data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, [restaurantName]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY === 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure the header's container doesn't block clicks when hidden
  useEffect(() => {
    // Update pointer-events on any potential overlapping elements
    const headerContainer = document.querySelector('.header-container') as HTMLElement;
    if (headerContainer) {
      headerContainer.style.pointerEvents = showHeader ? 'auto' : 'none';
    }
  }, [showHeader]);

  const handleUpdateCart = (item: MenuItem, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item._id);
      if (existingItem) {
        if (quantity === 0) {
          return prev.filter(cartItem => cartItem.id !== item._id);
        }
        return prev.map(cartItem =>
          cartItem.id === item._id ? { 
            ...cartItem, 
            quantity,
            price: item.price // Update price in case it changed due to variety selection
          } : cartItem
        );
      }
      if (quantity === 0) return prev;
      return [...prev, { 
        id: item._id, 
        quantity,
        price: item.price,
        name: item.itemName
      }];
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredSubCategories = useMemo(() => {
    if (!menuData) return [];

    // Get subcategories for the selected category
    const subCategories = menuData.subCategories.filter(
      sub => sub.category_id === selectedCategoryId
    );

    // Get items for these subcategories
    const items = menuData.items.filter(item =>
      subCategories.some(sub => sub._id === item.subCategory_id)
    );

    // Map subcategories to match MenuCategory interface
    const mappedSubCategories = subCategories.map(sub => ({
      _id: sub._id,
      category: sub.subCategory, // Use subCategory as the category name
      cloudinary_url: getFullImageUrl(sub.cloudinary_url),
      publish: 1, // Default value since subcategories don't have publish
      isActive: true, // Default value since subcategories don't have isActive
      items: items
        .filter(item => item.subCategory_id === sub._id)
        .map(item => ({
          ...item,
          image: getFullImageUrl(item.image)
        }))
    }));

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return mappedSubCategories.map(sub => ({
        ...sub,
        items: sub.items.filter(item =>
          item.itemName.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        )
      })).filter(sub => sub.items.length > 0);
    }

    // Apply dietary filters
    if (vegFilter || nonVegFilter) {
      return mappedSubCategories.map(sub => ({
        ...sub,
        items: sub.items.filter(item => 
          (vegFilter && ['veg', 'na'].includes(item.type as string)) || 
          (nonVegFilter && item.type === 'nonVeg')
        )
      })).filter(sub => sub.items.length > 0);
    }

    return mappedSubCategories;
  }, [menuData, selectedCategoryId, searchQuery, vegFilter, nonVegFilter]);

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
  const totalAmount = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  const restaurantInfo = menuData ? {
    name: menuData.title,
    address: "123 Main Street, City, State 12345", // This should come from API if available
    openingTime: menuData.categories[0]?.openTime || "11:00 AM",
    closingTime: menuData.categories[0]?.closeTime || "11:00 PM",
    description: "Serving authentic cuisine with love. Known for our traditional recipes and warm hospitality."
  } : null;

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!menuData || !restaurantInfo) {
    return <div className="min-h-screen flex items-center justify-center">No menu data available</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Layout */}
      {isMobile && (
        <div className="flex flex-col min-h-screen relative">
          {/* Header Container */}
          <div className={`fixed inset-x-0 top-0 z-[140] header-container transition-transform duration-300 ${
            !showHeader ? 'transform -translate-y-full' : 'transform translate-y-0'
          }`}>
            <Header 
              restaurantName={restaurantInfo.name}
              logo={getFullImageUrl(menuData.cloudinary_Iconurl)}
              onMenuClick={() => setIsSidebarOpen(true)}
              isVisible={showHeader}
            />
          </div>

          {/* Menu Controls */}
          <div 
            className={`fixed inset-x-0 z-[130] bg-white shadow-md transition-all duration-300 ${
              showHeader ? 'top-[56px]' : 'top-0'
            }`}
            style={{ height: '56px' }}
          >
            <MenuControls
              onSearch={handleSearch}
              onMenuTypeChange={setSelectedCategoryId}
              currentMenuType={selectedCategoryId}
              categories={menuData?.categories || []}
            />
          </div>

          {/* Mobile Sidebar */}
          <Sidebar 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            restaurantInfo={restaurantInfo}
          />

          {/* Main Content */}
          <main className={`flex-1 transition-all duration-300 ${
            showHeader ? 'pt-[112px]' : 'pt-[56px]'
          } ${totalItems > 0 ? 'pb-32' : 'pb-16'}`}>
            <SynchronizedMenuView 
              categories={filteredSubCategories}
              className="min-h-full"
              onUpdateCart={handleUpdateCart}
              showHeader={showHeader}
            />
          </main>

          {/* Bottom Fixed Container */}
          <div className="fixed inset-x-0 bottom-0 z-[120]">
            {/* Filter Component */}
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
              <div className="w-full bg-white border-t border-gray-200 shadow-lg">
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
                  src={getFullImageUrl(menuData.cloudinary_Iconurl)}
                  alt={`${restaurantInfo.name} logo`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h1 className="text-xl font-bold">{restaurantInfo.name}</h1>
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
              categories={filteredSubCategories}
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