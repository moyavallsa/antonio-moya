import { useState } from "react";
import { Code2, Share2, Plus } from "lucide-react";
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
      id: "web-dev",
      title: "Website Development",
      monthlyPrice: 50,
      yearlyPrice: 50 * 12 * 0.9,
      description: "Custom website development with modern technologies",
      icon: <Code2 className="h-8 w-8" />,
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Monthly Maintenance",
        "Regular Updates"
      ]
    },
    {
      id: "web-design-dev",
      title: "Website Design & Development",
      monthlyPrice: 40,
      yearlyPrice: 40 * 12 * 0.9,
      description: "Complete design and development solution",
      icon: <Plus className="h-8 w-8" />,
      features: [
        "Custom Design",
        "Responsive Development",
        "SEO Optimization",
        "Monthly Maintenance",
        "Priority Support"
      ]
    },
    {
      id: "social-media",
      title: "Social Media Management",
      monthlyPrice: 200,
      yearlyPrice: 200 * 12 * 0.9,
      description: "Professional social media management",
      icon: <Share2 className="h-8 w-8" />,
      features: [
        "2 Social Networks",
        "3 Posts per Week",
        "Content Creation",
        "Analytics Reports"
      ]
    }
  ];

  const calculateTotal = () => {
    let total = 0;
    selectedServices.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        total += billingCycle === 'yearly' 
          ? (service.yearlyPrice || service.monthlyPrice * 12 * 0.9)
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
      <div className="container mx-auto max-w-6xl">
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