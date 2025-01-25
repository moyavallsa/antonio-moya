import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import ServiceCard from "./ServiceCard";
import { Service } from "../../data/services/types";

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
    <div className="w-full">
      <Button
        variant="secondary"
        className="w-full py-4 px-3 sm:py-6 sm:px-4 text-left flex justify-between items-center group hover:bg-secondary/80"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 pr-2 sm:pr-4">
          <h3 className="text-base sm:text-lg md:text-xl font-display mb-1 break-words">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 break-words">{description}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110 flex-shrink-0 ml-2" />
        ) : (
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110 flex-shrink-0 ml-2" />
        )}
      </Button>
      
      {isExpanded && (
        <div className="grid grid-cols-1 gap-3 mt-3 animate-fadeIn">
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