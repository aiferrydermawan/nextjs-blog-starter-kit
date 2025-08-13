import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="text-lg text-gray-900">
            Blog
          </Link>
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
