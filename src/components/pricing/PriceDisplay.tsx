interface PriceDisplayProps {
  monthlyPrice: number;
  yearlyPrice?: number;
  billingCycle: 'monthly' | 'yearly';
}

const PriceDisplay = ({ monthlyPrice, yearlyPrice, billingCycle }: PriceDisplayProps) => {
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