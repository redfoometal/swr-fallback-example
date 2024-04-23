import InfinitySWR from "@/components/InfinitySWR/InfinitySWR";
import { SWRProvider } from "../../provider/swr-provider";


export default async function SWRInfinity() {
  // const albums = await (
  //   await fetch("https://jsonplaceholder.typicode.com/albums")
  // ).json();

  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
  ).json();

  const fallbackData = {
    posts: posts,
  };

  return (
    <main>
      <SWRProvider fallbackData={fallbackData}>
        <InfinitySWR/>
      </SWRProvider>
    </main>
  );
}
