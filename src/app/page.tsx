export default function Home() {
  const phaseItems = [
    { phase: "Phase 0", status: "done", label: "Scope lock" },
    { phase: "Phase 1", status: "done", label: "Project setup" },
    { phase: "Phase 2+", status: "next", label: "UI shell, models, pipeline, export" },
  ];

  return (
    <main className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-12 sm:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-8 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[var(--accent-blue)] blur-[100px]" />
        <div className="absolute right-10 bottom-4 h-48 w-48 rounded-full bg-[var(--accent-green)] blur-[110px]" />
      </div>

      <header className="mb-10">
        <p className="mb-3 inline-flex items-center rounded-full border border-[var(--surface-2)] bg-[var(--surface-0)] px-3 py-1 text-xs tracking-[0.14em] text-[var(--muted)] uppercase">
          Student Notes OS
        </p>
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">
          NOTED starter shell is live and ready for Phase 2 buildout.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          Browser-first foundation using Next.js App Router + TypeScript + Tailwind, with a
          deployment path prepared for Vercel.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-[var(--surface-2)] bg-[var(--surface-0)] p-6">
          <h2 className="text-lg font-semibold">Phase Progress</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {phaseItems.map((item) => (
              <li
                key={item.phase}
                className="flex items-center justify-between rounded-xl border border-[var(--surface-2)] bg-[var(--background)] px-3 py-2"
              >
                <span className="font-mono text-xs text-[var(--accent-yellow)]">{item.phase}</span>
                <span className="text-[var(--foreground)]">{item.label}</span>
                <span
                  className={
                    item.status === "done"
                      ? "rounded-full bg-[var(--accent-green)]/20 px-2 py-1 text-xs text-[var(--accent-green)]"
                      : "rounded-full bg-[var(--accent-blue)]/20 px-2 py-1 text-xs text-[var(--accent-blue)]"
                  }
                >
                  {item.status === "done" ? "Complete" : "Next"}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--surface-2)] bg-[var(--surface-0)] p-6">
          <h2 className="text-lg font-semibold">Quick Commands</h2>
          <div className="mt-4 space-y-3 font-mono text-sm">
            <p className="rounded-xl bg-[var(--background)] px-3 py-2">npm install</p>
            <p className="rounded-xl bg-[var(--background)] px-3 py-2">npm run dev</p>
            <p className="rounded-xl bg-[var(--background)] px-3 py-2">npm run build</p>
          </div>
          <a
            className="mt-4 inline-flex w-fit rounded-full border border-[var(--accent-blue)] px-4 py-2 text-sm text-[var(--accent-blue)] transition hover:bg-[var(--accent-blue)] hover:text-[var(--surface-0)]"
            href="https://vercel.com/new/clone?repository-url=https://github.com/your-org/noted"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy on Vercel
          </a>
        </article>
      </section>
    </main>
  );
}
