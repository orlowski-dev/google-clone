import Link from "next/link";

export default function LinkButton({
  children,
  location,
  target,
}: {
  children: React.ReactElement | string;
  location: string;
  target?: string;
}) {
  return (
    <Link
      href={location}
      target={target || undefined}
      className="text-sm inline-block py-2 px-4 bg-blue-500 rounded-lg text-white font-medium hover:brightness-105 transition-colors hover:shadow-md"
    >
      {children}
    </Link>
  );
}
