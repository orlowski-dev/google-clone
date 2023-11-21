import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function App() {
  return (
    <>
      <HomeHeader />
      <main className="pb-[100px]">
        <div className="max-w-[300px] md:max-w-[400px] mx-auto p-6 mt-6 md:mt-12 text-right">
          <Image
            src="/Google_2015_logo.svg"
            width={400}
            height={140}
            alt="logo"
            priority
            className="w-full"
          />
          <span>Clone</span>
        </div>
        <HomeSearch />
      </main>
    </>
  );
}
