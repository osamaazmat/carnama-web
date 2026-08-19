import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="site-wrap flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="wordmark text-[16px] font-semibold text-text">Carnama</p>
          <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-text-muted">
            Garage, verified service history, and ownership transfer for cars
            and bikes in Pakistan.
          </p>
          <p className="mt-4 text-[14px] text-text-muted">
            Questions:{' '}
            <a
              href="mailto:support@carnama.app"
              className="text-text-secondary underline-offset-2 hover:underline"
            >
              support@carnama.app
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-text-muted">
          <Link href="/privacy" className="hover:text-text">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-text">
            Terms
          </Link>
          <Link href="/privacy#delete-account" className="hover:text-text">
            Delete account
          </Link>
        </div>
      </div>
      <div className="site-wrap border-t border-border-subtle py-6 text-[13px] text-text-muted">
        © 2026 Carnama
      </div>
    </footer>
  );
}
