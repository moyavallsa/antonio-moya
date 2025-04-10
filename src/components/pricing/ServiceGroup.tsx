import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import ServiceCard from "./ServiceCard";
import { Service } from "../../data/services";

interface ServiceGroupProps {
  title: string;
  description: string;
  services: Service[];
  billingCycle: 'monthly' | 'yearly';
  onServiceSelect: (serviceId: string) => void;
  selectedServices: Set<string>;
}

const ServiceGroup = ({ 
  title, 
  description, 
  services,
  billingCycle,
  onServiceSelect,
  selectedServices
}: ServiceGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full mb-8">
      <Button
        variant="secondary"
        className="w-full mb-4 py-8 text-left flex justify-between items-center group hover:bg-secondary/80"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="px-4">
          <h3 className="text-xl font-display mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-6 w-6 transition-transform group-hover:scale-110 mr-4" />
        ) : (
          <ChevronDown className="h-6 w-6 transition-transform group-hover:scale-110 mr-4" />
        )}
      </Button>
      
      {isExpanded && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServices.has(service.id)}
              onClick={() => onServiceSelect(service.id)}
              billingCycle={billingCycle}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceGroup;