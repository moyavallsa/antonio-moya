import { Button } from "../ui/button";

interface BillingToggleProps {
  billingCycle: 'monthly' | 'yearly';
  setBillingCycle: (cycle: 'monthly' | 'yearly') => void;
}

const BillingToggle = ({ billingCycle, setBillingCycle }: BillingToggleProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
      <Button
        variant={billingCycle === 'monthly' ? 'default' : 'outline'}
        onClick={() => setBillingCycle('monthly')}
        className="w-full sm:w-auto"
      >
        Monthly Billing
      </Button>
      <Button
        variant={billingCycle === 'yearly' ? 'default' : 'outline'}
        onClick={() => setBillingCycle('yearly')}
        className="w-full sm:w-auto"
      >
        Yearly Billing (10% off)
      </Button>
    </div>
  );
};

export default BillingToggle;