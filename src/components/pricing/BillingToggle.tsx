import { Button } from "../ui/button";

interface BillingToggleProps {
  billingCycle: 'monthly' | 'yearly';
  setBillingCycle: (cycle: 'monthly' | 'yearly') => void;
}

const BillingToggle = ({ billingCycle, setBillingCycle }: BillingToggleProps) => {
  return (
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
  );
};

export default BillingToggle;