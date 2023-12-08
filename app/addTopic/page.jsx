"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="px-8 py-2 border rounded-2xl border-slate-500"
        type="text"
        placeholder="Judul"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="px-8 py-2 border rounded-2xl border-slate-500"
        type="text"
        placeholder="Deskripsi"
      />

      <button
        type="submit"
        className="px-6 py-3 font-bold text-white bg-pink-300 rounded-2xl w-fit"
      >
        Tambah
      </button>
    </form>
  );
}
