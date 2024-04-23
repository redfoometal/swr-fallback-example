import SimpleSWR from "../components/SimpleSWR/SimpleSWR";
import { SWRProvider } from "../provider/swr-provider";

export default async function Home() {
  const albums = await (
    await fetch("https://jsonplaceholder.typicode.com/albums?_limit=5")
  ).json();

  const comments = await (
    await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
  ).json();

  const fallbackData = {
    albums: albums,
    comments: comments,
  };

  return (
    <main>
      <SWRProvider fallbackData={fallbackData}>
        <SimpleSWR />
      </SWRProvider>
    </main>
  );
}
