import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Zap,
} from "lucide-react";
import { voltagePages, featurePages, intentPages } from "../data/seoContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "3Atlanta | High Precision Variable DC Power Supply Solutions",
  description:
    "Industrial variable DC power supplies for high-voltage, high-precision, and programmable testing workflows.",
  keywords: [
    "variable dc power supply",
    "programmable dc power supply",
    "high precision dc power supply",
    "industrial dc power supply",
    "3atlanta",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "3Atlanta | High Precision Variable DC Power Supply Solutions",
    description:
      "Industrial variable DC power supplies for high-voltage, high-precision, and programmable testing workflows.",
    url: "/",
    siteName: "3Atlanta",
    type: "website",
    images: [
      {
        url: "/eTM-3050U.png",
        alt: "eTM-3050U programmable DC power supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3Atlanta | High Precision Variable DC Power Supply Solutions",
    description:
      "Industrial variable DC power supplies for high-voltage, high-precision, and programmable testing workflows.",
    images: ["/eTM-3050U.png"],
  },
};

export default function HomePage() {
  const targetUrl = "https://variabledcpowersupply.com";

  return (
    <div className="min-h-screen flex flex-col selection:bg-zinc-200">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-24 md:pt-20 md:pb-32 flex flex-col items-center text-center">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-zinc-100 text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-6">
                Industrial Programmable DC Power Specialist
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                High Precision Variable <br className="hidden md:block" /> DC Power Solutions.
              </h1>
              <p className="text-xl text-brand-muted mb-10 leading-relaxed max-w-2xl mx-auto">
                3Atlanta provides specialized technical support and distribution for <strong>eTommens</strong> industrial systems.
                Engineered for high-precision R&amp;D and mission-critical testing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={targetUrl} target="_blank" rel="noopener" className="btn-primary">Check Direct Pricing</a>
                <a href="#technology" className="btn-secondary">Technical Specs</a>
              </div>
            </div>

            <div className="mt-24 w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl border border-brand-border/50">
              <img
                src="/eTM-3050U.png"
                alt="eTM-3050U programmable DC power supply"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section id="products" className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Voltage Ranges</h2>
            <p className="text-brand-muted max-w-xl mx-auto">
              Select a voltage range to view detailed technical specifications and industrial applications.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {voltagePages.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`} className="card-premium p-8 text-center group cursor-pointer block">
                <span className="block text-2xl font-bold mb-1 group-hover:scale-110 transition-transform">{page.slug.split("-")[0].toUpperCase()}</span>
                <span className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">View Specs</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="technology" className="bg-white border-y border-brand-border/50">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">Advanced Programmable Control</h2>
                <p className="text-lg text-brand-muted mb-8 leading-relaxed">
                  A <strong>programmable DC power supply</strong> is more than just a power source; it is a precision instrument.
                  Our units support SCPI commands via USB, LAN, and RS232 for seamless integration into automated test systems.
                </p>
                <div className="space-y-6">
                  {featurePages.slice(0, 3).map((page) => (
                    <Link key={page.slug} href={`/${page.slug}`} className="flex gap-4 group">
                      <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-zinc-900 group-hover:scale-110 transition-transform" /></div>
                      <div>
                        <h4 className="font-bold group-hover:underline">{page.title}</h4>
                        <p className="text-sm text-brand-muted">{page.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/high-precision-variable-dc-power-supply" className="card-premium p-8 flex flex-col justify-between aspect-square">
                  <Cpu className="w-8 h-8 mb-4" />
                  <div>
                    <h4 className="font-bold mb-2">High Precision</h4>
                    <p className="text-xs text-brand-muted">Millivolt resolution for sensitive research.</p>
                  </div>
                </Link>
                <Link href="/high-voltage-variable-dc-power-supply" className="card-premium p-8 flex flex-col justify-between aspect-square mt-8">
                  <Zap className="w-8 h-8 mb-4" />
                  <div>
                    <h4 className="font-bold mb-2">High Voltage</h4>
                    <p className="text-xs text-brand-muted">EV battery simulation up to 800V.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="applications" className="section-container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <h2 className="text-4xl font-bold tracking-tight">Industrial Applications</h2>
              <div className="prose prose-zinc max-w-none text-brand-muted leading-relaxed">
                <p>
                  The <strong>variable DC power supply</strong> is a cornerstone of modern industrial R&amp;D.
                  Whether you are simulating a 28V aircraft power bus in <strong>aerospace</strong> or
                  performing high-voltage insulation tests at 800V, precision is non-negotiable.
                </p>
                <p>
                  In the <strong>semiconductor industry</strong>, a <strong>high precision DC power supply</strong>
                  is essential for characterization and reliability testing. Low noise floors and
                  tight regulation ensure data reflects the device, not the power source.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <Link href="/rack-mount-variable-dc-power-supply" className="p-8 bg-zinc-50 rounded-[24px] border border-brand-border/50 hover:bg-zinc-100 transition-colors block">
                  <h4 className="font-bold mb-4">Rack Mount Solutions</h4>
                  <p className="text-sm text-brand-muted">Optimized for ATE systems and industrial cabinets, with high power density in 1U/2U form factors.</p>
                </Link>
                <Link href="/high-current-variable-dc-power-supply" className="p-8 bg-zinc-50 rounded-[24px] border border-brand-border/50 hover:bg-zinc-100 transition-colors block">
                  <h4 className="font-bold mb-4">High Current Output</h4>
                  <p className="text-sm text-brand-muted">Specialized units for plating and high-current component testing.</p>
                </Link>
              </div>
            </div>
            <div className="space-y-8">
              <div className="card-premium p-8 bg-black text-white border-none">
                <h4 className="text-xl font-bold mb-6">Technical Support</h4>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                  Our engineering team provides full technical consultation for complex power system integration.
                </p>
                <a href={targetUrl} target="_blank" rel="noopener nofollow" className="inline-flex items-center text-sm font-bold hover:gap-2 transition-all">
                  Consult an Expert <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="card-premium p-8">
                <h4 className="font-bold mb-4">ISO 9001 Certified</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  All 3Atlanta systems are manufactured under strict quality control protocols to ensure long-term reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-zinc-50 border-t border-brand-border/50">
          <div className="section-container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical FAQ</h2>
            <div className="space-y-8">
              {intentPages.slice(0, 3).map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="bg-white p-8 rounded-[24px] border border-brand-border/50 shadow-sm block hover:shadow-md transition-all">
                  <h4 className="font-bold mb-4">{page.title}</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Elevate Your Variable DC Power Supply Infrastructure.</h2>
            <p className="text-xl text-brand-muted mb-12">
              Join thousands of engineers who trust 3Atlanta for their most critical testing requirements.
            </p>
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener nofollow"
              className="btn-primary text-lg px-12 py-4 shadow-xl shadow-zinc-200"
            >
              View Catalog &amp; Pricing
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
