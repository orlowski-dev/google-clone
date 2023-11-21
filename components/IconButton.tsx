export default function IconButton({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <button className="text-xl bg-white hover:bg-gray-200 rounded-full p-2 transition-colors">
      {children}
    </button>
  );
}
