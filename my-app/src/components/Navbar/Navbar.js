import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 ">
        <div className="flex space-x-4 p-2">
          <Link
            href="/"
            className="text-white hover:bg-gray-700 rounded-md px-10 py-2 text-sm font-medium"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
          >
            AboutUs
          </Link>
          <Link
            href="/contactus"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
          >
            ContactUs
          </Link>
          <Link
            href="/addblog"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium"
          >
            Add Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
