export default function Loading() {
  return (
    <div className="px-4 md:ml-[120px] mt-4 max-w-xl grid gap-2 animate-pulse">
      <div className="h-[20px] bg-gray-100 rounded-lg max-w-[60%]"></div>
      <div className="h-[28px] bg-gray-100 rounded-lg"></div>
      <div className="h-[46px] bg-gray-100 rounded-lg"></div>
    </div>
  );
}
