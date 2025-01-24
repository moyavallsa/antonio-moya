import { socialMediaServices } from "./social-media";
import { ecommerceServices } from "./ecommerce";
import { websiteServices } from "./website";
import { maintenanceServices } from "./maintenance";
import { Service, ServiceGroup } from "./types";

export type { Service, ServiceGroup };

export const services: Service[] = [
  ...socialMediaServices,
  ...ecommerceServices,
  ...websiteServices,
  ...maintenanceServices
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Social Media Management",
    description: "Boost your social media presence with our comprehensive management solutions",
    services: socialMediaServices
  },
  {
    title: "E-commerce Management",
    description: "Complete e-commerce solutions to grow your online business",
    services: ecommerceServices
  },
  {
    title: "Website Design & Development",
    description: "Professional website development services for your business",
    services: websiteServices
  },
  {
    title: "Website Maintenance",
    description: "Keep your website secure, up-to-date, and performing at its best",
    services: maintenanceServices
  }
];