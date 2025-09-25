export interface Product {
  id: string;
  name: string;
  price: number;
  pages: number;
  cover_type: 'Paperback' | 'Hard Cover';
  description?: string;
  image_url?: string;
  trilogy_id?: string;
  trilogy_order?: number;
  shipment_days?: number;
}

export interface ProductWithReviews extends Product {
  reviews?: Review[];
}

export interface UserActivity {
  id: string;
  user_id: string;
  product_id: string;
  activity_type: 'click' | 'view';
  timestamp: string;
}

export interface User {
  id: string;
  created_at: string;
}

export interface Review {
  id: string;
  product_id: string;
  user_id?: string;
  rating?: number;
  review_text: string;
  customer_alias?: string;
  created_at: string;
}
