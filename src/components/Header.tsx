import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background">
      <div className="mx-auto flex h-14 max-w-hero items-center justify-between px-5">
        <Link href="/" className="flex items-center" aria-label="Carnama home">
          <Image
            src="/images/carnama-logo-light.png"
            alt="Carnama"
            width={132}
            height={36}
            className="logo-mark h-8 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-5 text-[15px] text-text-secondary">
          <Link href="/#owners" className="hover:opacity-70">
            Owners
          </Link>
          <Link href="/#workshops" className="hover:opacity-70">
            Workshops
          </Link>
          <a href="mailto:support@carnama.app" className="hover:opacity-70">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}
