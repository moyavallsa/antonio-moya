import { ReactElement } from 'react';

export interface Service {
  id: string;
  title: string;
  monthlyPrice: number;
  yearlyPrice?: number;
  description: string;
  icon: ReactElement;
  features: string[];
  isOneTime?: boolean;
}

export interface ServiceGroup {
  title: string;
  description: string;
  services: Service[];
}