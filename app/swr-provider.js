"use client";
import { SWRConfig, unstable_serialize } from "swr";
export const SWRProvider = ({ children, fallbackData }) => {
  console.log(unstable_serialize(["albums", "1"]))
  return (
    <SWRConfig
      value={{
        fallback: {
          [unstable_serialize(["albums", "1"])]: fallbackData.albums,
          [unstable_serialize(["comments", "1"])]: fallbackData.comments,
        },
        revalidateOnMount: true,
      }}
    >
      {children}
    </SWRConfig>
  );
};
