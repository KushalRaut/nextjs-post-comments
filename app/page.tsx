"use client";

import AddPost from "@/components/AddPost";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-blue-400">Home Page</h1>
      <AddPost />
    </main>
  );
}
