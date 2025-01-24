import { useState } from "react";
import { Code2, Share2, ShoppingCart, Settings } from "lucide-react";
import BillingToggle from "./pricing/BillingToggle";
import ServiceCard from "./pricing/ServiceCard";
import TotalDisplay from "./pricing/TotalDisplay";

interface Service {
  id: string;
  title: string;
  monthlyPrice: number;
  yearlyPrice?: number;
  description: string;
  icon: JSX.Element;
  features: string[];
}

const Pricing = () => {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [showTotal, setShowTotal] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const services: Service[] = [
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
    },
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
    },
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
      ]
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
      ]
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
      ]
    },
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

  const calculateTotal = () => {
    let total = 0;
    selectedServices.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        total += billingCycle === 'yearly' 
          ? service.yearlyPrice || service.monthlyPrice * 12
          : service.monthlyPrice;
      }
    });
    return total;
  };

  const toggleService = (serviceId: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedServices(newSelected);
    setShowTotal(true);
  };

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-display mb-6 text-center">Services Menu</h2>
        
        <BillingToggle 
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServices.has(service.id)}
              onClick={() => toggleService(service.id)}
              billingCycle={billingCycle}
              index={index}
            />
          ))}
        </div>

        <TotalDisplay
          total={calculateTotal()}
          billingCycle={billingCycle}
          show={showTotal}
        />
      </div>
    </section>
  );
};

export default Pricing;