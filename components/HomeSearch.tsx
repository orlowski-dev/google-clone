"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const { push } = useRouter();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    push("/search/web?search=" + input);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?lang=en",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw Error("Couldn't get a random word from the API.");

    const data: string[] = await res.json();

    push("/search/web?search=" + data[0]);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex gap-1 items-center w-full max-w-[90%] md:max-w-2xl mt-2 mx-auto border-gray-200 border-2 rounded-full py-3 px-6 transition-shadow focus-within:shadow-md hover:shadow-md"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          defaultValue={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg text-gray-500 mr-3" />
      </form>
      <div className="flex space-x-2 justify-center mt-8 px-6">
        <button
          onClick={handleFormSubmit}
          className="font-medium text-sm text-gray-600 bg-gray-50 py-2 px-3 rounded-md border-[1px] border-white focus:outline-none transition-colors hover:border-gray-200 active:border-gray-300"
        >
          Search Google
        </button>
        <button
          onClick={randomSearch}
          disabled={randomSearchLoading}
          className="relative overflow-hidden font-medium text-sm text-gray-600 bg-gray-50 py-2 px-3 rounded-md border-[1px] border-white focus:outline-none transition-colors hover:border-gray-200 active:border-gray-300"
        >
          {randomSearchLoading ? (
            <span className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <AiOutlineLoading3Quarters className="animate-spin" />
            </span>
          ) : undefined}
          <span>{"I'm Feeling Lucky"}</span>
        </button>
      </div>
    </>
  );
}
