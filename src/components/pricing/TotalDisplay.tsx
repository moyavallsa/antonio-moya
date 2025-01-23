interface TotalDisplayProps {
  total: number;
  billingCycle: 'monthly' | 'yearly';
  show: boolean;
}

const TotalDisplay = ({ total, billingCycle, show }: TotalDisplayProps) => {
  return (
    <div 
      className={`fixed bottom-8 right-8 bg-secondary p-6 rounded-lg shadow-lg transition-all duration-500 transform ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
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
  );
};

export default TotalDisplay;