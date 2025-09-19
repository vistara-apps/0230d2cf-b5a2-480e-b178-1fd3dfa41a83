export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="container">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-surface rounded-lg w-3/4 mx-auto"></div>
          <div className="h-4 bg-surface rounded w-1/2 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="h-32 bg-surface rounded-lg"></div>
            <div className="h-32 bg-surface rounded-lg"></div>
            <div className="h-32 bg-surface rounded-lg"></div>
            <div className="h-32 bg-surface rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
