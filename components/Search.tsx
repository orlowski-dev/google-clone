"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { IoClose } from "react-icons/io5";

export default function Search() {
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const { push } = useRouter();
  const searchParams = useSearchParams().get("searchTerm");
  const inputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState(searchParams || "");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    push("/search/web?searchTerm=" + input);
    inputRef.current!.blur();
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex gap-1 items-center w-full border-gray-200 border-2 rounded-full py-2 px-4 transition-shadow focus-within:shadow-md hover:shadow-md"
      >
        <input
          type="text"
          defaultValue={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
          className="flex-grow focus:outline-none mr-3"
          ref={inputRef}
        />
        {input && (
          <div className="hidden md:block mr-1 pr-2 border-r-2 border-r-gray-200">
            <IoClose
              className="cursor-pointer text-lg text-gray-500 mr-3"
              onClick={() => setInput("")}
            />
          </div>
        )}
        <BsFillMicFill className="cursor-pointer text-lg text-blue-500 mr-3" />
        <AiOutlineSearch className="text-xl text-blue-500" />
      </form>
    </>
  );
}
