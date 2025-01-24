interface PriceDisplayProps {
  monthlyPrice: number;
  yearlyPrice?: number;
  billingCycle: 'monthly' | 'yearly';
  isOneTime?: boolean;
}

const PriceDisplay = ({ monthlyPrice, yearlyPrice, billingCycle, isOneTime }: PriceDisplayProps) => {
  if (isOneTime) {
    return (
      <div className="text-3xl font-bold mb-2">
        €{monthlyPrice}
        <span className="text-sm font-normal text-muted-foreground">
          {" "}one-time
        </span>
      </div>
    );
  }

  const displayPrice = billingCycle === 'yearly'
    ? Math.round(yearlyPrice || monthlyPrice * 12 * 0.9)
    : monthlyPrice;

  return (
    <div className="text-3xl font-bold mb-2">
      €{displayPrice}
      <span className="text-sm font-normal text-muted-foreground">
        /{billingCycle === 'yearly' ? 'year' : 'month'}
      </span>
    </div>
  );
};

export default PriceDisplay;