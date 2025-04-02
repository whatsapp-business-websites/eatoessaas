import axios from 'axios';

const BASE_IMAGE_URL = 'https://connectapp.fra1.cdn.digitaloceanspaces.com/';

export interface MenuItem {
  _id: string;
  itemName: string;
  description: string;
  price: string;
  type: 'veg' | 'nonVeg' | 'na';
  image: string;
  video?: string;
  subCategory_id: string;
  publish: number;
  varietyArr: Array<{
    name: string;
    price: string;
    type: string;
  }>;
  chefRecommend: boolean;
  isActive: boolean;
}

export interface SubCategory {
  _id: string;
  subCategory: string;
  category_id: string;
  cloudinary_url: string;
}

export interface Category {
  _id: string;
  category: string;
  cloudinary_url: string;
  publish: number;
  isActive: boolean;
  openTime?: string;
  closeTime?: string;
}

export interface MenuData {
  title: string;
  cloudinary_Iconurl: string;
  categories: Category[];
  subCategories: SubCategory[];
  items: MenuItem[];
}

export interface MenuResponse {
  responseStatus: {
    status: string;
    message: string;
  };
  body: {
    menuitems: MenuData;
  };
}

// Helper function to construct full image URL
export const getFullImageUrl = (cloudinaryUrl: string): string => {
  if (!cloudinaryUrl) return '';
  return `${BASE_IMAGE_URL}${cloudinaryUrl}`;
};

// Helper function to construct full video URL
export const getFullVideoUrl = (videoUrl: string): string => {
  if (!videoUrl) return '';
  return `${BASE_IMAGE_URL}${videoUrl}`;
};

export const fetchMenu = async (restaurantId: string): Promise<MenuResponse> => {
  try {
    const response = await axios.get<MenuResponse>(
      `https://eatoes-test.eatoes.com/v2/menu/${restaurantId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
}; 