import { unstable_serialize } from "swr";
import Client from "./Client";
import styles from "./page.module.css";
import { SWRProvider } from "./swr-provider";

export default async function Home({ fallback }) {
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
    <main className={styles.main}>
      <SWRProvider fallbackData={fallbackData}>
        <Client />
      </SWRProvider>
    </main>
  );
}
