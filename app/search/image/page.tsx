import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";
import { getPSE } from "@/lib/getData";
import Pagination from "@/components/Pagination";

export default async function ImageSearchPage({
  searchParams,
}: {
  searchParams: { searchTerm: string; start: string };
}) {
  const searchTerm = searchParams.searchTerm;
  let apiUrlExtras = [{ key: "searchType", value: "image" }];

  if (searchParams.start)
    apiUrlExtras.push({ key: "start", value: searchParams.start });

  const data = await getPSE(searchTerm, apiUrlExtras);
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
          <>
            <div className="px-4">
              <ImageSearchResults data={data} />
            </div>
            <Pagination />
          </>
        )}
      </main>
    </Suspense>
  );
}
