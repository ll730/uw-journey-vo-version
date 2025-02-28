export function LoadingSkeleton() {
  return (
    <div className="w-full space-y-4 animate-pulse">
      <div className="h-8 w-3/4 bg-gray-200 rounded skeleton" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded skeleton" />
        <div className="h-4 bg-gray-200 rounded skeleton w-5/6" />
        <div className="h-4 bg-gray-200 rounded skeleton" />
      </div>
    </div>
  )
}

