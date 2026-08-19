import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur-md">
      <div className="site-wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Carnama home">
          <Image
            src="/images/carnama-logo-light.png"
            alt="Carnama"
            width={140}
            height={38}
            className="logo-mark h-8 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-7 text-[15px] text-text-secondary">
          <Link href="/#owners" className="hover:text-text">
            Owners
          </Link>
          <Link href="/#workshops" className="hover:text-text">
            Workshops
          </Link>
          <a href="mailto:support@carnama.app" className="hover:text-text">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}
