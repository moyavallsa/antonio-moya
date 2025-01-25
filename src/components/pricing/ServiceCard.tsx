import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import PriceDisplay from "./PriceDisplay";
import { Service } from "../../data/services/types";

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onClick: () => void;
  billingCycle: 'monthly' | 'yearly';
  index: number;
}

const ServiceCard = ({ service, isSelected, onClick, billingCycle, index }: ServiceCardProps) => {
  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer w-full ${
        isSelected 
          ? 'bg-secondary border-primary' 
          : 'bg-secondary/50 hover:bg-secondary/80'
      }`}
      onClick={onClick}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'backwards'
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] animate-gradient" />
      </div>
      
      <CardHeader className="text-center relative z-10 p-4">
        <div className="mx-auto mb-3">{service.icon}</div>
        <CardTitle className="text-lg md:text-xl font-display mb-2">{service.title}</CardTitle>
        <PriceDisplay
          monthlyPrice={service.monthlyPrice}
          yearlyPrice={service.yearlyPrice}
          billingCycle={billingCycle}
          isOneTime={service.isOneTime}
        />
      </CardHeader>
      
      <CardContent className="relative z-10 p-4 pt-0">
        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <span className="text-primary">›</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;