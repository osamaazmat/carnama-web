function ShieldIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 3l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function GarageSketch() {
  return (
    <div className="mx-auto w-full max-w-[280px]" aria-hidden="true">
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between border-b border-border-subtle px-3 py-2.5">
          <span className="text-[13px] font-semibold">Vehicles</span>
          <span className="text-[13px] text-text-muted">All</span>
        </div>
        <div className="divide-y divide-border-subtle">
          <div className="px-3 py-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[15px] font-semibold leading-tight">
                  2021 Honda Civic
                </p>
                <p className="mt-0.5 text-[13px] text-text-muted">LEA-2148</p>
              </div>
              <span className="pill pill-muted">Car</span>
            </div>
          </div>
          <div className="px-3 py-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[15px] font-semibold leading-tight">
                  2022 Yamaha YBR
                </p>
                <p className="mt-0.5 text-[13px] text-text-muted">ICT-1902</p>
              </div>
              <span className="pill pill-muted">Bike</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecordSketch() {
  return (
    <div className="card px-3 py-3" aria-hidden="true">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[15px] font-semibold">Oil change</p>
          <p className="mt-0.5 text-[13px] text-text-muted">
            42,100 km · Rs 4,500
          </p>
        </div>
        <span className="pill pill-verified">
          <ShieldIcon />
          Verified
        </span>
      </div>
    </div>
  );
}

export function WorkshopSearchSketch() {
  return (
    <div className="card overflow-hidden" aria-hidden="true">
      <div className="border-b border-border-subtle px-3 py-2.5">
        <p className="text-[13px] text-text-muted">Search plate</p>
        <p className="mt-0.5 text-[15px] font-semibold">LEA-2148</p>
      </div>
      <div className="flex items-center justify-between px-3 py-3">
        <div>
          <p className="text-[15px] font-semibold">Honda Civic</p>
          <p className="mt-0.5 text-[13px] text-text-muted">2021 · claimed</p>
        </div>
        <span className="pill pill-pending">Pending</span>
      </div>
    </div>
  );
}
