import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import IconButton from "./IconButton";
import LinkButton from "./LinkButton";

export default function HomeHeader() {
  return (
    <header>
      <div className="flex justify-end p-4">
        <div className="flex gap-5 items-center">
          <Link href="https://mail.google.com" className="hover:underline">
            Gmail
          </Link>
          <Link href="https://images.google.com" className="hover:underline">
            Images
          </Link>
          <IconButton>
            <CgMenuGridO />
          </IconButton>
          <LinkButton location="/">Sign in</LinkButton>
        </div>
      </div>
    </header>
  );
}
