export const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  const currentPageIndex = pageIndex === 0 ? 1 : pageIndex;
  return `https://jsonplaceholder.typicode.com/posts?_page=${currentPageIndex}&_limit=10`; // SWR key
};