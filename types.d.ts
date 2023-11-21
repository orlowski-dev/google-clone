interface IGoogleApiResponsItem {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: { cse_thumbnail: [Array]; metatags: [Array]; cse_image: [Array] };
  image?: { contextLink: string; thumbnailLink: string };
}

interface IGoogleApiResponseData {
  searchInformation: {
    formattedTotalResults: string;
    formattedSearchTime: string;
  };
  items: IGoogleApiResponsItem[];
}
