import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";

export default function HomeHeader() {
  return (
    <header>
      <div className="max-w-6xl mx-auto flex justify-end p-6">
        <div className="flex gap-5 items-center">
          <Link href="https://mail.google.com" className="hover:underline">
            Gmail
          </Link>
          <Link href="https://images.google.com" className="hover:underline">
            Images
          </Link>
          <button className="text-xl bg-white hover:bg-gray-200 rounded-full p-2 transition-colors">
            <CgMenuGridO />
          </button>
          <Link
            href="/"
            className="inline-block py-2 px-4 bg-blue-500 rounded-lg text-white font-medium hover:brightness-105 transition-colors hover:shadow-md"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
