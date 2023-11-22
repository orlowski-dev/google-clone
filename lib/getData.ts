const GOOGLE_API_KEY = process.env.GOOGLE_SEARCH_API_KEY;
const GOOGLE_CONTEXT_KEY = process.env.GOOGLE_CONTEXT_KEY;

if (!GOOGLE_API_KEY) throw Error("Google API key doesn't exist!");
if (!GOOGLE_CONTEXT_KEY) throw Error("Google context key doesn't exist!");

export async function getPSE(
  searchTerm: string,
  extra?: { key: string; value: string }[]
): Promise<IGoogleApiResponseData | null> {
  let uri = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CONTEXT_KEY}&q=${searchTerm}`;
  if (extra && extra.length > 0) {
    extra.forEach((item) => (uri += "&" + item.key + "=" + item.value));
  }

  const res = await fetch(uri);

  if (!res.ok) {
    throw Error("Error while fetching the data.");
  }

  const data = await res.json();

  return data;
}
