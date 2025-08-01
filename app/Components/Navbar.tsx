import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Personal AI</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-indigo-400 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-400 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-indigo-400 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}