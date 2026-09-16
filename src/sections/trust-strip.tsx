const trustSignals = [
  "4+ Years Professional Experience",
  "Production Applications",
  "Web • Mobile • SaaS",
  "Node.js • React • MySQL",
];

function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-8xl px-5 py-6 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-center sm:grid-cols-4 sm:text-left">
          {trustSignals.map((signal) => (
            <div key={signal} className="font-mono text-xs tracking-wide text-muted-foreground sm:text-[13px]">
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TrustStrip };
