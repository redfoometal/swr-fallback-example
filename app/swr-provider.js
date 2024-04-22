"use client";
import { SWRConfig } from "swr";
export const SWRProvider = ({ children, fallbackData }) => {
  return <SWRConfig value={{ 
    fallback:{
      'albums': fallbackData.albums,
      'comments': fallbackData.comments
    },
    revalidateOnMount: true  
  }}>{children}</SWRConfig>;
};
