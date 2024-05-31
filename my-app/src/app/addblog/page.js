const AddBlog = () => {
  return (
    <>
      <div className="w-6/12 mt-20 flex flex-col bg-whilte-400 m-auto h-screen">
        <label
          for="title"
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
          />
        </div>
        <label
          for="description"
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
          />
        </div>
        <label
          for="content"
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
          />
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 mt-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddBlog;
