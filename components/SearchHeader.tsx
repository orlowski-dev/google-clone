import Image from "next/image";
import { CgMenuGridO, CgOptions, CgMenu, CgProfile } from "react-icons/cg";
import IconButton from "./IconButton";
import LinkButton from "./LinkButton";
import Search from "./Search";
import Link from "next/link";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 left-0 bg-white z-10">
      <div className="p-4 grid gap-4 grid-cols-search-header-mobile md:grid-cols-search-header-desktop items-center">
        <div className="md:hidden">
          <IconButton>
            <CgMenu />
          </IconButton>
        </div>
        <div>
          <Link href="/">
            <Image
              src="/Google_2015_logo.svg"
              height={34}
              width={100}
              alt="logo"
              className="mx-auto"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <IconButton>
            <CgProfile />
          </IconButton>
        </div>
        <div className="col-span-3 md:col-auto md:max-w-[80%]">
          <Search />
        </div>
        <div className="hidden md:flex justify-end">
          <IconButton>
            <CgOptions />
          </IconButton>
          <IconButton>
            <CgMenuGridO />
          </IconButton>
          <div className="ml-3">
            <LinkButton location="/">Sign in</LinkButton>
          </div>
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
