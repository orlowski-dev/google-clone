export default function Loading() {
  return (
    <div className="px-4 mt-4 max-w-xl grid gap-4 grid-cols-3 animate-pulse">
      <div className="grid gap-2 max-w-[240px]">
        <div className="h-[200px] bg-gray-100 rounded-lg"></div>
        <div className="h-[20px] bg-gray-100 rounded-lg"></div>
        <div className="h-[20px] bg-gray-100 rounded-lg"></div>
      </div>
      <div className="grid gap-2 max-w-[240px]">
        <div className="h-[200px] bg-gray-100 rounded-lg"></div>
        <div className="h-[20px] bg-gray-100 rounded-lg"></div>
        <div className="h-[20px] bg-gray-100 rounded-lg"></div>
      </div>
      <div className="grid gap-2 max-w-[240px]">
        <div className="h-[200px] bg-gray-100 rounded-lg"></div>
        <div className="h-[20px] bg-gray-100 rounded-lg"></div>
        <div className="h-[20px] bg-gray-100 rounded-lg"></div>
      </div>
    </div>
  );
}
