import { ShoppingCart } from "lucide-react";
import { Service } from "./types";

export const ecommerceServices: Service[] = [
  {
    id: "basic-ecommerce",
    title: "Basic E-commerce Management",
    monthlyPrice: 1500,
    yearlyPrice: 16200,
    description: "Essential e-commerce management services",
    icon: <ShoppingCart className="h-8 w-8" />,
    features: [
      "Product catalog updates",
      "Inventory management",
      "Basic order processing",
      "SEO optimization",
      "Monthly reporting",
      "€100 ads budget"
    ]
  },
  {
    id: "standard-ecommerce",
    title: "Standard E-commerce Management",
    monthlyPrice: 2000,
    yearlyPrice: 21600,
    description: "Advanced e-commerce management solution",
    icon: <ShoppingCart className="h-8 w-8" />,
    features: [
      "Advanced catalog optimization",
      "Inventory updates",
      "Customer management",
      "Advanced SEO",
      "€150 ads budget"
    ]
  },
  {
    id: "premium-ecommerce",
    title: "Premium E-commerce Management",
    monthlyPrice: 2500,
    yearlyPrice: 27000,
    description: "Complete e-commerce management package",
    icon: <ShoppingCart className="h-8 w-8" />,
    features: [
      "Full catalog management",
      "Comprehensive inventory updates",
      "Daily performance monitoring",
      "€200 ads budget"
    ]
  }
];