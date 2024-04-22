import Client from "./Client";
import { SWRProvider } from "./swr-provider";

export default async function Home() {
  const albums = await (
    await fetch("https://jsonplaceholder.typicode.com/albums")
  ).json();

  const comments = await (
    await fetch("https://jsonplaceholder.typicode.com/comments")
  ).json();

  const firstFiveAlbums = albums.slice(0, 5);
  const firstFiveComments = comments.slice(0, 5);

  const fallbackData = {
    albums: firstFiveAlbums,
    comments: firstFiveComments,
  };

  return (
    <main>
      <SWRProvider fallbackData={fallbackData}>
        <Client />
      </SWRProvider>
    </main>
  );
}
