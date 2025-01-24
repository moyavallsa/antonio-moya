import { Settings } from "lucide-react";
import { Service } from "./types";

export const maintenanceServices: Service[] = [
  {
    id: "basic-maintenance",
    title: "Basic Website Maintenance",
    monthlyPrice: 50,
    yearlyPrice: 540,
    description: "Essential website maintenance package",
    icon: <Settings className="h-8 w-8" />,
    features: [
      "Monthly security updates",
      "Weekly backups",
      "Basic performance monitoring",
      "Up to 2 content updates per month",
      "Email support"
    ]
  },
  {
    id: "standard-maintenance",
    title: "Standard Website Maintenance",
    monthlyPrice: 100,
    yearlyPrice: 1080,
    description: "Professional website maintenance solution",
    icon: <Settings className="h-8 w-8" />,
    features: [
      "Weekly security updates",
      "Daily backups",
      "Advanced performance monitoring",
      "Up to 5 content updates per month",
      "Priority email support",
      "Monthly analytics report"
    ]
  },
  {
    id: "premium-maintenance",
    title: "Premium Website Maintenance",
    monthlyPrice: 200,
    yearlyPrice: 2160,
    description: "Complete website maintenance package",
    icon: <Settings className="h-8 w-8" />,
    features: [
      "Real-time security monitoring",
      "Hourly backups",
      "24/7 uptime monitoring",
      "Unlimited content updates",
      "Priority phone & email support",
      "Weekly analytics reports",
      "Monthly SEO optimization"
    ]
  }
];