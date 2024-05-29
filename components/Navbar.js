import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-white text-lg">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-white text-lg">About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;