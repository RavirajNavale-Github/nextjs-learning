"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  // console.log(title, description, content)

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !content) {
      alert("Fill all the Fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/addblog/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description, content }),
      });

      if(res.ok){
        router.push('/');
      }else{
        throw new Error("Failed to Create Blog")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <form
        className="w-6/12 mt-20 flex flex-col bg-whilte-400 m-auto h-screen"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-white-900"
        >
          Title
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="title"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-white-900 mt-5"
        >
          Description
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="description"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Meta-Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <label
          htmlFor="content"
          className="block text-sm font-medium leading-6 text-white-900 mt-5"
        >
          Content
        </label>
        <div className="mt-2">
          <textarea
            type="text"
            name="content"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Write content for your blog..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 mt-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddBlog;
