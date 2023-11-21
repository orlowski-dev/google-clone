import Link from "next/link";
import Parser from "html-react-parser";

export default function WebSearchResults({
  data,
}: {
  data: IGoogleApiResponseData;
}) {
  return (
    <section className="grid gap-6 mt-4">
      <h2 className="text-sm text-gray-500 mb-4">
        About {data.searchInformation.formattedTotalResults} results (
        {data.searchInformation.formattedSearchTime} seconds)
      </h2>
      {data.items.map((item) => (
        <article key={item.link} className="grid gap-1 max-w-xl">
          <div className="group grid gap-1">
            <Link href={item.link} className="text-sm truncate">
              {item.formattedUrl}
            </Link>
            <Link
              href={item.link}
              className="text-lg truncate text-blue-500 font-medium group-hover:underline decoration-blue-500"
            >
              {item.title}
            </Link>
          </div>
          <p className="text-sm text-gray-500">{Parser(item.htmlSnippet)}</p>
        </article>
      ))}
    </section>
  );
}
