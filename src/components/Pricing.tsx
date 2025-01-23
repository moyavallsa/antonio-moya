import { useState } from "react";
import { Code2, Share2, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

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
      yearlyPrice: 50 * 12 * 0.9, // 10% discount
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
      yearlyPrice: 40 * 12 * 0.9, // 10% discount
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
      yearlyPrice: 200 * 12 * 0.9, // 10% discount
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

  const total = calculateTotal();

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-display mb-6 text-center">Services Menu</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={billingCycle === 'monthly' ? 'default' : 'outline'}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly Billing
          </Button>
          <Button
            variant={billingCycle === 'yearly' ? 'default' : 'outline'}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly Billing (10% off)
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`relative overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                selectedServices.has(service.id) 
                  ? 'bg-secondary border-primary' 
                  : 'bg-secondary/50 hover:bg-secondary/80'
              }`}
              onClick={() => toggleService(service.id)}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'backwards'
              }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] animate-gradient" />
              </div>
              
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-display mb-2">{service.title}</CardTitle>
                <div className="text-3xl font-bold mb-2">
                  €{billingCycle === 'yearly' 
                      ? Math.round(service.yearlyPrice || service.monthlyPrice * 12 * 0.9) 
                      : service.monthlyPrice}
                  <span className="text-sm font-normal text-muted-foreground">
                    /{billingCycle === 'yearly' ? 'year' : 'month'}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-primary">›</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          className={`fixed bottom-8 right-8 bg-secondary p-6 rounded-lg shadow-lg transition-all duration-500 transform ${
            showTotal ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h3 className="text-xl font-display mb-2">Total Cost</h3>
          <div className="space-y-1">
            <p>
              {billingCycle === 'yearly' ? 'Yearly' : 'Monthly'}: 
              <span className="font-bold"> €{Math.round(total)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;