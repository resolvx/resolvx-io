import Link from "next/link";
import { ArrowRight, Terminal, Globe, Shield, Zap, Server, GitBranch, Check } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: Terminal,
    title: "Single Binary Deployment",
    description:
      "Everything compiles into one executable. No Redis, no NATS cluster, no external databases to install or manage.",
  },
  {
    icon: Globe,
    title: "Global Traffic Management",
    description:
      "Built-in GTM with geographic, weighted, latency-based, and failover routing policies out of the box.",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description:
      "Health checks, automatic failover, and cluster-managed virtual IPs for production-grade high availability.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description:
      "In-memory caching with Ristretto, optimized query handling, and minimal latency overhead.",
  },
  {
    icon: Server,
    title: "Easy Clustering",
    description:
      "Add --join=peer:6222 and you have a cluster. Embedded NATS handles all the coordination automatically.",
  },
  {
    icon: GitBranch,
    title: "Open Source",
    description:
      "MIT licensed and fully open source. Inspect the code, modify it, and contribute back to the community.",
  },
];

const architectureItems = [
  { label: "DNS Server", detail: "miekg/dns" },
  { label: "Storage", detail: "BadgerDB" },
  { label: "Cache", detail: "Ristretto" },
  { label: "Events", detail: "NATS" },
  { label: "API", detail: "REST + UI" },
  { label: "HA", detail: "VIP + Election" },
];

const usedBy = [
  "Enterprise Teams",
  "Platform Engineers",
  "DevOps Teams",
  "Cloud Native Projects",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background graphic */}
        <div className="pointer-events-none absolute inset-0">
          {/* Grid pattern */}
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
              </pattern>
              <radialGradient id="fade" cx="50%" cy="0%" r="70%">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="black" />
              </radialGradient>
              <mask id="gridMask">
                <rect width="100%" height="100%" fill="url(#fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
          </svg>

          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px]">
            <div className="absolute top-20 left-[20%] w-[400px] h-[400px] rounded-full bg-emerald-500/30 blur-[150px]" />
            <div className="absolute top-10 right-[20%] w-[350px] h-[350px] rounded-full bg-cyan-500/25 blur-[150px]" />
            <div className="absolute top-40 left-[40%] w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-[150px]" />
          </div>

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[13px] text-text-secondary bg-surface border border-border-subtle rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            Open Source DNS & GTM
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            DNS Infrastructure
            <br />
            <span className="text-text-muted">Made Simple</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            The single-binary DNS server with built-in global traffic management.
            No dependencies, no complexity—just deploy and go.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://github.com/resolvx/resolvx"
              className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-btn-primary-text bg-btn-primary-bg rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-foreground bg-btn-secondary-bg border border-btn-secondary-border rounded-full hover:bg-surface-hover transition-colors"
            >
              Read the Docs
            </Link>
          </div>

          {/* Quick command */}
          <div className="mt-12">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-surface border border-border-subtle rounded-2xl">
              <Terminal className="w-4 h-4 text-text-muted" />
              <code className="text-[14px] text-text-secondary font-mono">
                resolvx server --config /etc/resolvx.yaml
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Used By Section */}
      <section className="py-16 border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-[13px] text-text-muted uppercase tracking-wider mb-8">
            Built for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {usedBy.map((name) => (
              <span key={name} className="text-[15px] text-text-secondary font-medium">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Everything you need
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A complete DNS solution with global traffic management,
              all in a single binary with zero external dependencies.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-surface border border-border-subtle rounded-2xl hover:bg-surface-hover hover:border-border transition-all"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-surface-hover rounded-xl mb-4">
                  <feature.icon className="w-5 h-5 text-text-secondary" />
                </div>
                <h3 className="text-[17px] font-semibold mb-2">{feature.title}</h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 md:py-32 border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Embedded, not external
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Unlike traditional DNS/GTM setups that require separate Redis, NATS,
                databases, and load balancers—ResolvX embeds everything.
                One binary gives you a complete solution.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {architectureItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 bg-surface border border-border-subtle rounded-xl"
                  >
                    <span className="text-[14px] font-medium">{item.label}</span>
                    <span className="text-[13px] text-text-muted">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal mockup */}
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
                  <div className="w-3 h-3 rounded-full bg-surface-hover" />
                  <div className="w-3 h-3 rounded-full bg-surface-hover" />
                  <div className="w-3 h-3 rounded-full bg-surface-hover" />
                  <span className="ml-2 text-[12px] text-text-muted">terminal</span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-relaxed">
                  <div className="text-text-muted"># Start a single node</div>
                  <div className="text-emerald-500 dark:text-emerald-400">$ resolvx server</div>
                  <div className="mt-4 text-text-muted"># Or join a cluster</div>
                  <div className="text-emerald-500 dark:text-emerald-400">$ resolvx server --join=node1:6222</div>
                  <div className="mt-4 text-text-secondary">
                    <span className="text-blue-500 dark:text-blue-400">INFO</span> DNS server listening on :53
                  </div>
                  <div className="text-text-secondary">
                    <span className="text-blue-500 dark:text-blue-400">INFO</span> API server listening on :8080
                  </div>
                  <div className="text-text-secondary">
                    <span className="text-blue-500 dark:text-blue-400">INFO</span> NATS embedded server started
                  </div>
                  <div className="text-text-secondary">
                    <span className="text-emerald-500 dark:text-emerald-400">INFO</span> Ready to serve queries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GTM Policies Section */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Intelligent routing
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Route traffic based on geography, latency, weights, or health status.
              Mix and match policies for complex routing scenarios.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Geographic", desc: "Route by client location" },
              { title: "Weighted", desc: "Distribute across endpoints" },
              { title: "Latency", desc: "Fastest response wins" },
              { title: "Failover", desc: "Automatic backup switching" },
            ].map((policy) => (
              <div
                key={policy.title}
                className="p-5 bg-surface border border-border-subtle rounded-2xl text-center"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg mx-auto mb-3">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <h3 className="text-[15px] font-semibold mb-1">{policy.title}</h3>
                <p className="text-[14px] text-text-muted">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative p-12 md:p-16 bg-gradient-to-br from-surface to-surface/50 border border-border rounded-3xl text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Ready to simplify your DNS?
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                Get started with ResolvX in minutes. Download the binary,
                write your config, and you're ready to go.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://github.com/resolvx/resolvx/releases"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-btn-primary-text bg-btn-primary-bg rounded-full hover:opacity-90 transition-opacity"
                >
                  Download
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-foreground bg-btn-secondary-bg border border-btn-secondary-border rounded-full hover:bg-surface-hover transition-colors"
                >
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
