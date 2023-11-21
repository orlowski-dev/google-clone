export default async function WebSearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const searchTerm = searchParams.search;
  return (
    <>
      <main>
        <h1>Search page</h1>
        <p>{searchTerm || "not found"}</p>
      </main>
    </>
  );
}
