import Image from "next/image";
import ContactImage from "../../../public/contactus.jpg";

const ContactUs = () => {
  return (
    <div 
    className="h-screen bg-gray-900">
      <form class="max-w-sm mx-auto pt-24">
        <div class="mb-5">
          <label
            for="name"
            class="block mb-2 text-white text-sm font-medium dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Stalin Paul"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-white text-sm font-medium dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="stalin@gmail.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="message"
            class="block mb-2 text-white text-sm font-medium dark:text-white"
          >
            Message
          </label>
          <textarea
            type="text"
            id="message"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message..."
            required
          />
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 mt-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
