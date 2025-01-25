import BillingToggle from "./pricing/BillingToggle";
import TotalDisplay from "./pricing/TotalDisplay";
import ServiceGroup from "./pricing/ServiceGroup";
import { services, serviceGroups } from "../data/services";
import { usePricing } from "../hooks/usePricing";

const Pricing = () => {
  const {
    selectedServices,
    showTotal,
    billingCycle,
    setBillingCycle,
    calculateTotal,
    toggleService
  } = usePricing();

  return (
    <section id="pricing" className="py-12 w-full overflow-hidden">
      <div className="max-w-[100vw] mx-auto px-4 md:max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-display mb-6 text-center">Services Menu</h2>
        
        <BillingToggle 
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />

        <div className="space-y-4 mb-8">
          {serviceGroups.map((group) => (
            <ServiceGroup
              key={group.title}
              title={group.title}
              description={group.description}
              services={group.services}
              billingCycle={billingCycle}
              onServiceSelect={toggleService}
              selectedServices={selectedServices}
            />
          ))}
        </div>

        <TotalDisplay
          total={calculateTotal(services)}
          billingCycle={billingCycle}
          show={showTotal}
        />
      </div>
    </section>
  );
};

export default Pricing;