
import type { ReactNode } from "react";

// Defines the four alert types our component accepts.
export type AlertType = "success" | "error" | "warning" | "info";

// Props for the AlertBox component.
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: ReactNode;
}

// Represents a user's information.
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

// Props for the UserProfileCard component.
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: ReactNode;
}

// Represents a product.
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

// Props for the ProductDisplay component.
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: ReactNode;
}
