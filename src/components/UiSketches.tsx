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

export function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="rounded-[36px] border border-border bg-surface p-3 shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
        <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-border" />
        <div className="overflow-hidden rounded-[26px] border border-border-subtle bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}

export function GarageSketch() {
  return (
    <DeviceFrame>
      <div className="px-4 py-3" aria-hidden="true">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-semibold">Vehicles</span>
          <span className="text-[13px] text-text-muted">All</span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="rounded-card border border-border-subtle bg-surface px-3 py-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[15px] font-semibold leading-tight">
                  2021 Honda Civic
                </p>
                <p className="mt-1 text-[13px] text-text-muted">LEA-2148</p>
              </div>
              <span className="pill pill-muted">Car</span>
            </div>
          </div>
          <div className="rounded-card border border-border-subtle bg-surface px-3 py-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[15px] font-semibold leading-tight">
                  2022 Yamaha YBR
                </p>
                <p className="mt-1 text-[13px] text-text-muted">ICT-1902</p>
              </div>
              <span className="pill pill-muted">Bike</span>
            </div>
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

export function RecordSketch() {
  return (
    <div className="card px-4 py-4" aria-hidden="true">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold">Oil change</p>
          <p className="mt-1 text-[13px] text-text-muted">
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
    <DeviceFrame>
      <div aria-hidden="true">
        <div className="border-b border-border-subtle px-4 py-3">
          <p className="text-[13px] text-text-muted">Search plate</p>
          <p className="mt-1 text-[16px] font-semibold">LEA-2148</p>
        </div>
        <div className="flex items-center justify-between px-4 py-4">
          <div>
            <p className="text-[15px] font-semibold">Honda Civic</p>
            <p className="mt-1 text-[13px] text-text-muted">2021 · claimed</p>
          </div>
          <span className="pill pill-pending">Pending</span>
        </div>
      </div>
    </DeviceFrame>
  );
}
