"use client";
import React, { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { getKey } from "./getKey";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const InfinitySWR = () => {
  const { data, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateFirstPage: false,
      revalidateOnMount: false,
    }
  );

  const loadMore = () => {
    if (!isValidating) {
      setSize(size + 1);
    }
  };

  // Необходимо для отслеживания скролла и подгрузки данных
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isValidating]);

  if (!data) return "loading";
  // useEffect(() => {
  //   mutate(
  //     "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10",
  //     data
  //   );
  // }, []);
  // mutate(data, false)
  console.log(data);
  return (
    <div>
      <p>Infinite Load</p>
      <button onClick={() => setSize(size + 1)}>Load More</button>
      <div>
        {data.map((posts, index) => {
          return posts.map((post) => {
            return (
              <div key={post.id}>
                <div>userId: {post.userId}</div>
                <div>id: {post.id}</div>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default InfinitySWR;
