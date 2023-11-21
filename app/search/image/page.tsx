import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";
import { getPSE } from "@/lib/getData";

export default async function ImageSearchPage({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const searchTerm = searchParams.searchTerm;
  const data = await getPSE(searchTerm, { key: "searchType", value: "image" });
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
          <div className="px-4">
            <ImageSearchResults data={data} />
          </div>
        )}
      </main>
    </Suspense>
  );
}
