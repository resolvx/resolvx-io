import Link from "next/link";
import { ArrowRight, Terminal, Globe, Shield, Zap, Server, GitBranch, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: Terminal,
    title: "Single Binary",
    description:
      "Everything compiles into one executable. No Redis, no NATS cluster, no external databases to manage.",
  },
  {
    icon: Globe,
    title: "Global Traffic Management",
    description:
      "Built-in GTM with geographic, weighted, latency-based, and failover routing policies.",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description:
      "Health checks, automatic failover, and cluster-managed virtual IPs for high availability.",
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
      "Add --join=peer:6222 and you have a cluster. Embedded NATS handles all coordination.",
  },
  {
    icon: GitBranch,
    title: "Open Source",
    description:
      "MIT licensed, fully open source. Inspect, modify, and contribute to the codebase.",
  },
];

const architectureItems = [
  { label: "DNS Server", detail: "miekg/dns" },
  { label: "Storage", detail: "BadgerDB (embedded)" },
  { label: "Cache", detail: "Ristretto (in-memory)" },
  { label: "Events", detail: "NATS (embedded)" },
  { label: "API", detail: "REST + Web UI" },
  { label: "HA", detail: "VIP + Leader Election" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Background grid */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Gradient orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 border-white/20 text-gray-400">
              Open Source DNS & GTM
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in">
              <span className="gradient-text">Single Binary.</span>
              <br />
              <span className="text-white">Zero Dependencies.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 md:text-xl animate-fade-in-delay-1">
              ResolvX is an open-source DNS server with built-in Global Traffic Management.
              Everything you need for enterprise DNS in one executable.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-delay-2">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
                asChild
              >
                <Link href="https://github.com/resolvx/resolvx">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 w-full sm:w-auto"
                asChild
              >
                <Link href="https://github.com/resolvx/resolvx">
                  View on GitHub
                </Link>
              </Button>
            </div>

            {/* Quick start command */}
            <div className="mt-12 animate-fade-in-delay-3">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <Terminal className="h-4 w-4 text-gray-500" />
                <code className="text-sm text-gray-300">resolvx server --config /etc/resolvx.yaml</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-white/20 text-gray-400">
              Features
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              Everything you need for DNS & GTM
            </h2>
            <p className="mt-4 text-gray-400">
              No external services required. Deploy a single binary and get a production-ready
              DNS server with global traffic management.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-white/20 text-gray-400">
                Architecture
              </Badge>
              <h2 className="text-3xl font-bold md:text-4xl">
                Embedded, not external
              </h2>
              <p className="mt-4 text-gray-400">
                Unlike traditional DNS/GTM setups that require separate Redis, NATS, databases,
                and load balancers, ResolvX embeds everything. The result: <code className="text-white">resolvx server</code> gives
                you everything.
              </p>

              <div className="mt-8 space-y-3">
                {architectureItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-white">{item.label}</span>
                    <span className="text-sm text-gray-500">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Terminal mockup */}
              <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden glow">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-gray-500">terminal</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-gray-500"># Start a single node</div>
                  <div className="text-green-400">$ resolvx server</div>
                  <div className="mt-4 text-gray-500"># Or join a cluster</div>
                  <div className="text-green-400">$ resolvx server --join=node1:6222</div>
                  <div className="mt-4 text-gray-500"># DNS ready on :53, API on :8080</div>
                  <div className="text-gray-400">
                    <span className="text-blue-400">INFO</span> DNS server listening on :53
                  </div>
                  <div className="text-gray-400">
                    <span className="text-blue-400">INFO</span> API server listening on :8080
                  </div>
                  <div className="text-gray-400">
                    <span className="text-blue-400">INFO</span> NATS embedded server started
                  </div>
                  <div className="text-gray-400">
                    <span className="text-green-400">INFO</span> Ready to serve queries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GTM Policies Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-white/20 text-gray-400">
              Traffic Management
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              Intelligent routing policies
            </h2>
            <p className="mt-4 text-gray-400">
              Route traffic based on geography, latency, weights, or health status.
              Mix and match policies for complex routing scenarios.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Geographic", desc: "Route by client location using GeoIP" },
              { title: "Weighted", desc: "Distribute traffic across endpoints" },
              { title: "Latency", desc: "Route to fastest responding endpoint" },
              { title: "Failover", desc: "Automatic primary/backup switching" },
            ].map((policy) => (
              <div
                key={policy.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-center"
              >
                <CheckCircle className="mx-auto h-8 w-8 text-green-500 mb-3" />
                <h3 className="font-semibold text-white">{policy.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready to simplify your DNS?
              </h2>
              <p className="mt-4 text-gray-400">
                Get started with ResolvX in minutes. Download the binary, write your config, and go.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://github.com/resolvx/resolvx/releases">
                    Download
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://github.com/resolvx/resolvx#readme">
                    Read the Docs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
