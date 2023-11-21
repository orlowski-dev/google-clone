import WebSearchResults from "@/components/WebSearchResults";
import { getPSE } from "@/lib/getData";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export default async function WebSearchPage({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const searchTerm = searchParams.searchTerm;
  const data: IGoogleApiResponseData | null = await getPSE(searchTerm);

  return (
    <Suspense fallback={<Loading />}>
      <main>
        {!data && (
          <div className="max-w-6xl p-4 m-auto space-y-4 mt-4 text-center">
            <h1 className="text-2xl font-medium">No results found.</h1>
            <p>
              Try searching something else or go back to the{" "}
              <Link href="/" className="text-blue-500">
                home page
              </Link>
              .
            </p>
          </div>
        )}
        {data && (
          <div className="px-4 md:ml-[120px]">
            <WebSearchResults data={data} />
          </div>
        )}
      </main>
    </Suspense>
  );
}
