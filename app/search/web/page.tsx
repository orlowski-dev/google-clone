export default async function WebSearchPage({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const searchTerm = searchParams.searchTerm;
  return (
    <>
      <main>
        <h1>Search page</h1>
        <p>{searchTerm || "not found"}</p>
      </main>
    </>
  );
}
