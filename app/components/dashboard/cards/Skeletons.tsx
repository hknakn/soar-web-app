export function CardSkeleton() {
  return (
    <div className="h-full w-full rounded-[25px] p-6 bg-white border border-[#DFEAF2] animate-pulse">
      <div className="space-y-3">
        <div className="h-4 w-16 bg-gray-200 rounded" />
        <div className="h-6 w-24 bg-gray-200 rounded" />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="space-y-2">
          <div className="h-3 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="border-t border-[#DFEAF2]" />
        <div className="h-20 flex items-center justify-between px-6">
          <div className="h-6 w-48 bg-gray-200 rounded" />
          <div className="h-8 w-12 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

export function TransactionSkeleton() {
  return (
    <div className="flex items-center justify-between animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-gray-200" />
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-3 w-32 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="h-4 w-20 bg-gray-200 rounded" />
    </div>
  );
} 