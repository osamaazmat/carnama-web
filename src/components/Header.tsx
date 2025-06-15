import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed w-full bg-gradient-to-r from-primary to-secondary z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/carnama-logo-light.png"
              alt="Carnama Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-accent transition-colors">
              Contact Us
            </Link>
            <Link href="/downloads" className="text-white hover:text-accent transition-colors">
              Downloads
            </Link>
          </nav>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 