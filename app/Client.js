"use client";
import React from "react";
import useSWR from "swr/immutable";

const fetcher = async (url) => {
  // Имитация задержки в 5 секунд
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Client = () => {
  const { data: albums } = useSWR(
    ["albums", "1"],
    () => fetcher("https://jsonplaceholder.typicode.com/albums"),
  );

  const { data: comments } = useSWR(
    ["comments ", "1"],
    () => fetcher("https://jsonplaceholder.typicode.com/comments"),
  );

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h2>Альбомы:</h2>
        {albums?.map((element) => (
          <div key={element.id}>
            <p>User ID: {element.userId}</p>
            <p>ID: {element.id}</p>
            <p>Title: {element.title}</p>
            <p>Completed: {element.completed ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <h2>Комментарии:</h2>
        {comments?.map((element) => (
          <div key={element.id}>
            <p>postId: {element.postId}</p>
            <p>ID: {element.id}</p>
            <p>name: {element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
