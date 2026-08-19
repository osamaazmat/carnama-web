import Image from 'next/image';
import Link from 'next/link';
import {
  GarageSketch,
  RecordSketch,
  WorkshopSearchSketch,
} from '@/components/UiSketches';

const ownerBlocks = [
  {
    title: 'Garage',
    body: 'Add cars and bikes from a catalog. One list, with a type badge.',
  },
  {
    title: 'Records',
    body: 'Oil, brakes, tyres, and the rest — with mileage, cost, and notes. Self-logged or waiting on a workshop. Verified when the shop confirms.',
  },
  {
    title: 'Transfer',
    body: 'Send an offer to another Carnama email. Keep the plate or send it with the vehicle. They accept in the app. You can cancel for 7 days. History stays on the vehicle.',
  },
  {
    title: 'Retained plates',
    body: 'If you keep a plate after a transfer, reuse it on a new vehicle or release it.',
  },
];

const workshopBlocks = [
  {
    title: 'Look up a plate',
    body: 'Search by plate. Log a visit. Attach receipts. Find an invoice later.',
  },
  {
    title: 'Log work',
    body: 'Enter country and city on your profile, then log a repair by plate. New plates get a catalog entry. Claimed and unclaimed plates stay distinct.',
  },
  {
    title: 'Verify',
    body: 'When an owner tags your shop, accept to verify or dismiss to leave it as user-logged.',
  },
  {
    title: 'Receipts',
    body: 'Attach up to three receipt photos when you log work. Look up an invoice by number.',
  },
];

const steps = [
  {
    n: '1',
    title: 'Owner adds a vehicle',
    body: 'Car or bike from the catalog, with plate, mileage, and chassis.',
  },
  {
    n: '2',
    title: 'Work is logged or verified',
    body: 'Owners log service. Workshops look up the plate, log their own work, and confirm jobs tagged to them.',
  },
  {
    n: '3',
    title: 'History follows the vehicle',
    body: 'Service history stays with the vehicle when you transfer ownership.',
  },
];

export default function Home() {
  return (
    <div className="page-fade">
      <section className="mx-auto max-w-hero px-5 pb-16 pt-14">
        <Image
          src="/images/carnama-logo-light.png"
          alt="Carnama"
          width={220}
          height={60}
          className="logo-mark mb-8 h-12 w-auto"
          priority
        />
        <h1 className="text-[32px] font-bold leading-tight tracking-tight sm:text-[40px]">
          Keep the history with the vehicle.
        </h1>
        <p className="mt-4 max-w-copy text-[16px] leading-[1.5] text-text-secondary">
          Carnama is an app for vehicle owners and workshops in Pakistan. Log
          work, verify it at a shop, and pass the vehicle on without losing the
          file.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3">
          <a href="mailto:support@carnama.app" className="btn-primary">
            Get the app
          </a>
          <p className="text-[14px] text-text-muted">
            Available on iOS and Android
          </p>
          <a
            href="#workshops"
            className="text-[15px] text-text-secondary underline-offset-4 hover:underline"
          >
            For workshops
          </a>
        </div>
      </section>

      <section
        id="owners"
        className="scroll-mt-16 border-t border-border-subtle"
      >
        <div className="mx-auto max-w-copy px-5 py-16">
          <p className="section-label">Owners</p>
          <h2 className="mt-2 text-[22px] font-bold">
            Cars and bikes in one garage
          </h2>
          <p className="mt-3 text-[16px] leading-[1.5] text-text-secondary">
            Keep a garage, log service, and let workshops verify work. When you
            sell, history stays with the vehicle.
          </p>

          <div className="mt-8">
            <GarageSketch />
          </div>

          <div className="mt-10 divide-y divide-border-subtle border-y border-border-subtle">
            {ownerBlocks.map((block) => (
              <div key={block.title} className="py-6">
                <h3 className="text-[16px] font-semibold">{block.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-text-secondary">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <RecordSketch />
          </div>
        </div>
      </section>

      <section
        id="workshops"
        className="scroll-mt-16 border-t border-border-subtle bg-surface-muted"
      >
        <div className="mx-auto max-w-copy px-5 py-16">
          <p className="section-label">Workshops</p>
          <h2 className="mt-2 text-[22px] font-bold">Look up a plate, log the visit</h2>
          <p className="mt-3 text-[16px] leading-[1.5] text-text-secondary">
            Search recent vehicles, log repair by plate, and verify work an
            owner tagged to your shop.
          </p>

          <div className="mt-8">
            <WorkshopSearchSketch />
          </div>

          <div className="mt-10 divide-y divide-border-subtle border-y border-border-subtle">
            {workshopBlocks.map((block) => (
              <div key={block.title} className="py-6">
                <h3 className="text-[16px] font-semibold">{block.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-text-secondary">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how"
        className="scroll-mt-16 border-t border-border-subtle"
      >
        <div className="mx-auto max-w-copy px-5 py-16">
          <p className="section-label">How it fits together</p>
          <h2 className="mt-2 text-[22px] font-bold">Three steps</h2>
          <ol className="mt-8 space-y-8">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="mt-0.5 w-6 shrink-0 text-[13px] font-semibold text-text-muted">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-text-secondary">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="border-t border-border-subtle">
        <div className="mx-auto max-w-copy px-5 py-10 text-[14px] text-text-muted">
          <p className="wordmark font-semibold text-text">Carnama</p>
          <p className="mt-3">
            Questions:{' '}
            <a
              href="mailto:support@carnama.app"
              className="text-text-secondary underline-offset-2 hover:underline"
            >
              support@carnama.app
            </a>
          </p>
          <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            <Link href="/privacy" className="hover:text-text">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-text">
              Terms
            </Link>
            <Link href="/privacy#delete-account" className="hover:text-text">
              Delete account
            </Link>
          </p>
          <p className="mt-6">© 2026 Carnama</p>
        </div>
      </footer>
    </div>
  );
}
