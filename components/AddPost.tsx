"use strict";

import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");

  return (
    <form>
      <div>
        <textarea
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="What's on your mind?"
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        />
      </div>
    </form>
  );
}
