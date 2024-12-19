export function QuickTransferSkeleton() {
  return (
    <div className="flex items-center justify-center gap-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center text-center space-y-2">
          <div className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-gray-200" />
          <div className="space-y-1">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-3 w-16 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BalanceHistorySkeleton() {
  return (
    <div className="h-[250px] lg:h-[300px] bg-gray-100 rounded-lg animate-pulse" />
  );
} 