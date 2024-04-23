"use client";
import { getKey } from "@/components/InfinitySWR/getKey";
import { SWRConfig, unstable_serialize } from "swr";
import { unstable_serialize as infinite_unstable_serialize } from "swr/infinite";

export const SWRProvider = ({ children, fallbackData }) => {
  return (
    <SWRConfig
      value={{
        fallback: {
          [unstable_serialize(["albums"])]: fallbackData.albums,
          [unstable_serialize(["comments"])]: fallbackData.comments,
          // взят в [] потому что при работе с useSWRInfinite оно хранит данные в виде массива с массивами [ [],[], ... ]
          [infinite_unstable_serialize(getKey)]: [fallbackData.posts],
        },
        revalidateOnMount: true,
      }}
    >
      {children}
    </SWRConfig>
  );
};
