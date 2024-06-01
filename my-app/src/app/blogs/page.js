import { Card } from "flowbite-react";

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/addblog/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed To fetch blogs");
    }

    return res.json();
  } catch (error) {
    console.log("Error fetching blogs", error);
  }
};

const blogs = async () => {
  const { blogs } = await getBlogs();

  return (
    <>
      {blogs.map((blog) => (
        <div className="grid grid-cols-3 gap-4">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900">
              Title: {blog.title}
            </h5>
            <p className="font-normal text-gray-700">
              Description: {blog.description}
            </p>
          </div>
        </div>
      ))}

      {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p> */}
    </>
  );
};

export default blogs;
