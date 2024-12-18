interface CreditCardProps {
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  variant?: 'dark' | 'light';
}

export function CreditCard({
  balance,
  cardHolder,
  cardNumber,
  validThru,
  variant = 'dark'
}: CreditCardProps) {
  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatCardNumber = (number: string) => {
    return number.replace(/(\d{4})/g, '$1 ').trim();
  };

  const baseClasses = "relative overflow-hidden rounded-xl p-6 w-full aspect-[1.586/1]";
  const variantClasses = {
    dark: "bg-gray-900 text-white",
    light: "bg-white text-gray-900 border border-gray-200"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-2">
          <p className="text-sm opacity-80">Balance</p>
          <p className="text-2xl font-semibold">{formatBalance(balance)}</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8">
              <div className="relative h-full w-full">
                <div className="absolute -left-1 top-4 h-3 w-3 rounded-full bg-white/80" />
                <div className="absolute left-2 top-4 h-3 w-3 rounded-full bg-white/60" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xl font-medium tracking-wider">
              {formatCardNumber(cardNumber)}
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-80">CARD HOLDER</p>
                <p className="text-sm font-medium">{cardHolder}</p>
              </div>
              <div>
                <p className="text-xs opacity-80">VALID THRU</p>
                <p className="text-sm font-medium">{validThru}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 