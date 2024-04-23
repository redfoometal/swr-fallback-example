export const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return [
    `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex + 1}&_limit=10`,
    pageIndex + 1
  ];
};