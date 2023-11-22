"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  let startIndex = Number(searchParams.get("start")) || 1;

  const changePage = (ehh: "up" | "down") => {
    ehh === "up" ? (startIndex += 10) : (startIndex -= 10);
    push(
      `${pathname}?searchTerm=${searchParams.get(
        "searchTerm"
      )}&start=${startIndex}`
    );
  };

  return (
    <div className="px-4 md:ml-[120px] max-w-xl mt-4">
      {startIndex >= 10 ? (
        <div className="text-blue-500 flex justify-between">
          <button
            className="flex items-center gap-2"
            onClick={() => changePage("down")}
          >
            <TbChevronLeft /> Previous
          </button>
          <button
            className="flex items-center gap-2"
            onClick={() => changePage("up")}
          >
            Next
            <TbChevronRight />
          </button>
        </div>
      ) : (
        <div>
          <button
            className="flex items-center gap-2 text-blue-500"
            onClick={() => changePage("up")}
          >
            Next <TbChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
