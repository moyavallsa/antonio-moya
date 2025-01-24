import { Share2 } from "lucide-react";
import { Service } from "./types";

export const socialMediaServices: Service[] = [
  {
    id: "basic-social",
    title: "Basic Social Media Plan",
    monthlyPrice: 150,
    yearlyPrice: 1620,
    description: "Essential social media management for small businesses",
    icon: <Share2 className="h-8 w-8" />,
    features: [
      "Manage 1 platform",
      "3 posts/week",
      "Custom images",
      "Performance report"
    ]
  },
  {
    id: "standard-social",
    title: "Standard Social Media Plan",
    monthlyPrice: 250,
    yearlyPrice: 2700,
    description: "Comprehensive social media management solution",
    icon: <Share2 className="h-8 w-8" />,
    features: [
      "Manage 2 platforms",
      "4 posts/week per platform",
      "Google My Business management",
      "Enhanced reporting"
    ]
  },
  {
    id: "comprehensive-social",
    title: "Comprehensive Social Media Plan",
    monthlyPrice: 350,
    yearlyPrice: 3780,
    description: "Advanced social media management package",
    icon: <Share2 className="h-8 w-8" />,
    features: [
      "Manage 3 platforms",
      "5 posts/week per platform",
      "€50 advertising budget included",
      "Advanced analytics"
    ]
  }
];