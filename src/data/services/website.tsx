import { Code2 } from "lucide-react";
import { Service } from "./types";

export const websiteServices: Service[] = [
  {
    id: "landing-page",
    title: "Landing Page Development",
    monthlyPrice: 200,
    description: "Custom landing page development",
    icon: <Code2 className="h-8 w-8" />,
    features: [
      "1-3 page custom-designed landing page",
      "Responsive design",
      "Basic SEO optimization"
    ],
    isOneTime: true
  },
  {
    id: "basic-website",
    title: "Basic Website Development",
    monthlyPrice: 400,
    description: "Essential website development package",
    icon: <Code2 className="h-8 w-8" />,
    features: [
      "3-5 page custom website",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form"
    ],
    isOneTime: true
  },
  {
    id: "standard-website",
    title: "Standard Website Development",
    monthlyPrice: 800,
    description: "Professional website development solution",
    icon: <Code2 className="h-8 w-8" />,
    features: [
      "5-10 page custom website",
      "Responsive design",
      "Advanced SEO optimization",
      "CMS integration",
      "Image gallery"
    ],
    isOneTime: true
  }
];