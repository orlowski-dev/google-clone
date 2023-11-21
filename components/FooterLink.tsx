import Link from "next/link";

interface IFooterLinkProps {
  location: string;
  children: string;
}

export default function FooterLink({ location, children }: IFooterLinkProps) {
  return (
    <Link href={location} className="text-sm hover:underline text-gray-950">
      {children}
    </Link>
  );
}
