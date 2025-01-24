import { useState } from "react";
import { Service } from "../data/services";

export const usePricing = () => {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [showTotal, setShowTotal] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const calculateTotal = (services: Service[]) => {
    let total = 0;
    selectedServices.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        if (service.isOneTime) {
          total += service.monthlyPrice;
        } else {
          total += billingCycle === 'yearly' 
            ? service.yearlyPrice || service.monthlyPrice * 12
            : service.monthlyPrice;
        }
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

  return {
    selectedServices,
    showTotal,
    billingCycle,
    setBillingCycle,
    calculateTotal,
    toggleService
  };
};