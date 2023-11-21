import Link from "next/link";

export default function ImageSearchResults({
  data,
}: {
  data: IGoogleApiResponseData;
}) {
  return (
    <section className="grid mt-4">
      <h2 className="text-sm text-gray-500 mb-4">
        About {data.searchInformation.formattedTotalResults} results (
        {data.searchInformation.formattedSearchTime} seconds)
      </h2>
      <div className="grid gap-6 mt-8 md:grid-cols-image-search-results">
        {data.items.map((item) => {
          if (!item.link || item.link.length < 8) return;
          return (
            <article key={item.link}>
              <Link
                href={item.image?.contextLink || ""}
                className="grid gap-1 group"
              >
                <img
                  src={item.link}
                  alt={item.title + " image"}
                  className="group-hover:shadow-md transition-shadow"
                />
                <h3 className="text-sm truncate group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm">{item.displayLink}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
