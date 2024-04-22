"use client";
import { SWRConfig } from "swr";
export const SWRProvider = ({ children, fallbackData }) => {
  return <SWRConfig value={{ 
    fallback:{
      'https://jsonplaceholder.typicode.com/albums': fallbackData.albums,
      'https://jsonplaceholder.typicode.com/comments': fallbackData.comments
    },
    revalidateOnMount: true  
  }}>{children}</SWRConfig>;
};
