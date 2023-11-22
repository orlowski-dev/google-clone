"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch, AiOutlinePicture } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();
  return (
    <section className="border-b-[1px] border-b-gray-100">
      <div className="px-4 md:ml-[120px]">
        <button
          className={`text-sm inline-flex gap-3 items-center py-2 px-4 border-b-2 border-b-white  transition-colors text-gray-900 hover:text-blue-500 hover:border-b-blue-500 ${
            pathname === "/search/web" && " !text-blue-500 !border-b-blue-500"
          }`}
          onClick={() => push("/search/web?" + searchParams)}
        >
          <AiOutlineSearch />
          <span>All</span>
        </button>
        <button
          className={`text-sm inline-flex gap-3 items-center py-2 px-4 border-b-2 border-b-white  transition-colors text-gray-900 hover:text-blue-500 hover:border-b-blue-500 ${
            pathname === "/search/image" && " !text-blue-500 !border-b-blue-500"
          }`}
          onClick={() => push(`/search/image?${searchParams}`)}
        >
          <AiOutlinePicture />
          <span>Images</span>
        </button>
      </div>
    </section>
  );
}
