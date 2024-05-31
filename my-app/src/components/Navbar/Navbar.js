'use client'
// import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const router = useRouter();

  return (
    <div>
      <nav className="bg-gray-800 ">
        <div className="flex space-x-4 p-2">
          {/* <Link
            href="/"
            className="text-white hover:bg-gray-700 rounded-md px-10 py-2 text-sm font-medium"
            aria-current="page"
          >
            Home
          </Link> */}
          <button
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
            onClick={() => router.push('/')}
          >
            Home
          </button>
          {/* <Link
            href="/aboutus"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
          >
            AboutUs
          </Link> */}
          <button
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
            onClick={() => router.push('/aboutus')}
          >
            AboutUs
          </button>
          {/* <Link
            href="/contactus"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
          >
            ContactUs
          </Link> */}
          <button
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
            onClick={() => router.push('/contactus')}
          >
            ContactUs
          </button>
          <button
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
            onClick={() => router.push('/addblog')}
          >
            Add Blog
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
