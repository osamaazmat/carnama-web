import Footer from '@/components/Footer';
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
    n: '01',
    title: 'Owner adds a vehicle',
    body: 'Car or bike from the catalog, with plate, mileage, and chassis.',
  },
  {
    n: '02',
    title: 'Work is logged or verified',
    body: 'Owners log service. Workshops look up the plate, log their own work, and confirm jobs tagged to them.',
  },
  {
    n: '03',
    title: 'History follows the vehicle',
    body: 'Service history stays with the vehicle when you transfer ownership.',
  },
];

function FeatureGrid({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {items.map((block) => (
        <div key={block.title} className="rounded-2xl border border-border-subtle bg-surface p-6">
          <h3 className="text-[17px] font-semibold">{block.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
            {block.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-fade">
      <section className="overflow-hidden">
        <div className="site-wrap grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="section-label">Pakistan · cars and bikes</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
              Keep the history with the vehicle.
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-text-secondary">
              Carnama is an app for vehicle owners and workshops in Pakistan.
              Log work, verify it at a shop, and pass the vehicle on without
              losing the file.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="mailto:support@carnama.app" className="btn-primary">
                Get the app
              </a>
              <a href="#workshops" className="btn-ghost">
                For workshops
              </a>
            </div>
            <p className="mt-4 text-[14px] text-text-muted">
              Available on iOS and Android
            </p>
          </div>
          <div className="lg:justify-self-end">
            <GarageSketch />
            <div className="mx-auto mt-4 max-w-[300px]">
              <RecordSketch />
            </div>
          </div>
        </div>
      </section>

      <section
        id="owners"
        className="scroll-mt-16 border-t border-border-subtle bg-surface-muted"
      >
        <div className="site-wrap py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="section-label">Owners</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Cars and bikes in one garage
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
              Keep a garage, log service, and let workshops verify work. When
              you sell, history stays with the vehicle.
            </p>
          </div>
          <FeatureGrid items={ownerBlocks} />
        </div>
      </section>

      <section
        id="workshops"
        className="scroll-mt-16 border-t border-border-subtle"
      >
        <div className="site-wrap grid items-start gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
          <div className="lg:sticky lg:top-24">
            <p className="section-label">Workshops</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Look up a plate, log the visit
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
              Search recent vehicles, log repair by plate, and verify work an
              owner tagged to your shop.
            </p>
            <div className="mt-10 hidden lg:block">
              <WorkshopSearchSketch />
            </div>
          </div>
          <div>
            <div className="mb-10 lg:hidden">
              <WorkshopSearchSketch />
            </div>
            <FeatureGrid items={workshopBlocks} />
          </div>
        </div>
      </section>

      <section
        id="how"
        className="scroll-mt-16 border-t border-border-subtle bg-surface-muted"
      >
        <div className="site-wrap py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="section-label">How it fits together</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Three steps
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="text-[13px] font-semibold tracking-wide text-text-muted">
                  {step.n}
                </p>
                <h3 className="mt-3 text-[18px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border-subtle">
        <div className="site-wrap flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Get Carnama
            </h2>
            <p className="mt-2 text-[15px] text-text-secondary">
              Available on iOS and Android. For owners and workshops.
            </p>
          </div>
          <a href="mailto:support@carnama.app" className="btn-primary">
            Get the app
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
