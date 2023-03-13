import React, { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

let posts = [
  { id: "1", title: "post1" },
  { id: "2", title: "post2" },
];

export const Home = () => {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      // console.log({ posts });

      await wait(1110);
      return [...posts];
    },
    staleTime: 0,
  });

  // console.log(postQuery.data);

  const newPost = useMutation({
    mutationFn: async (title) => {
      await wait(1000);
      posts = [
        ...posts,
        {
          id: crypto.randomUUID(),
          title,
        },
      ];
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      console.log("in onsucces", posts);
    },
  });

  if (postQuery.isLoading)
    return (
      <h3
        style={{
          margin: "100px auto",
        }}
      >
        Loading....
      </h3>
    );
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)} </pre>;

  return (
    <div>
      {postQuery.data.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
      <button
        disabled={newPost.isLoading}
        onClick={() => newPost.mutate("New post")}
        style={{
          fontSize: "1.2vmax",
          width: "8vmax",
          height: "3vmax",
          background: "#757575",
          color: "white",
          padding: "0px",
          margin: "20px auto",
          opacity: "0.7",
        }}
      >
        Add post
      </button>
    </div>
  );
};
const wait = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
