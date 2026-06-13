import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Truck, Headphones, HelpCircle, ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Where to Buy eTommens Variable DC Power Supplies | Official Procurement Hub",
  description: "Official procurement and purchasing guide for eTommens programmable and variable DC power supplies. Access online store, check factory warranty, shipping times, and technical support.",
  alternates: {
    canonical: "/where-to-buy",
  },
};

export default function WhereToBuyPage() {
  const shopUrl = "https://variabledcpowersupply.com";

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumbs Section */}
        <div className="max-w-[1200px] mx-auto px-6 pt-12">
          <Breadcrumbs items={[{ name: "Where to Buy" }]} />
        </div>

        {/* Hero Section */}
        <section className="bg-white border-b border-brand-border/50">
          <div className="max-w-[1200px] mx-auto px-6 py-20 text-center md:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-zinc-100 text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-4">
              Authorized Channels
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Procurement &amp; Purchasing Guide
            </h1>
            <p className="text-xl text-brand-muted max-w-3xl leading-relaxed">
              Find authentic eTommens programmable DC power supplies. Get factory-direct pricing, certified local technical support, and authentic manufacturer warranty.
            </p>
          </div>
        </section>

        {/* Core CTA & Shopping Card */}
        <section className="section-container">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Primary Outlet Card */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 bg-black text-white rounded-[32px] shadow-xl relative overflow-hidden border border-zinc-800">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-6">
                  Recommended Fulfillment Hub
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Official Online Store
                </h2>
                <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                  For immediate standard model dispatch, stock validation, and secure credit/purchase card checkout, procure directly from the eTommens global store.
                </p>
                
                {/* Benefits in Black Card */}
                <ul className="space-y-4 text-sm text-zinc-300 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">✓</span>
                    <span>Direct access to full inventory (Benchtop, Rack-Mount, High-Power)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">✓</span>
                    <span>Real-time shipping calculations &amp; warehouse selection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">✓</span>
                    <span>Instant invoice download &amp; transaction documentation</span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 pt-6 border-t border-zinc-800">
                <a
                  href={shopUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-all gap-2"
                >
                  Visit VariableDCPowerSupply.com <ExternalLink className="w-5 h-5" />
                </a>
                <p className="text-[10px] text-zinc-500 mt-4 tracking-widest uppercase">
                  Verified Outbound Link • Manufacturer Direct
                </p>
              </div>
            </div>

            {/* Why Buy Official - Trust Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="p-8 bg-white rounded-[24px] border border-brand-border/50 shadow-sm flex gap-5">
                <div className="shrink-0 p-3 bg-zinc-50 rounded-xl border border-brand-border/30 flex items-center justify-center h-12 w-12 text-black">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">12-Month Factory Warranty</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    All power supplies purchased through authorized channels come with a standard 12-month manufacturer-backed warranty. Get repair or replacement without secondary delays.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white rounded-[24px] border border-brand-border/50 shadow-sm flex gap-5">
                <div className="shrink-0 p-3 bg-zinc-50 rounded-xl border border-brand-border/30 flex items-center justify-center h-12 w-12 text-black">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Global Regional Shipping</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Rapid shipping dispatched from regional supply chains. Standard delivery features customs clearance assistance, duty paid solutions, and live tracking support.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white rounded-[24px] border border-brand-border/50 shadow-sm flex gap-5">
                <div className="shrink-0 p-3 bg-zinc-50 rounded-xl border border-brand-border/30 flex items-center justify-center h-12 w-12 text-black">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">SCPI / API Setup Support</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Access our libraries for Python integration, LabVIEW drivers, and standard SCPI documentation. Free guidance to interface programmable models with test benches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Requirements / Bulk Support */}
        <section className="bg-white border-t border-brand-border/50">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex p-3 bg-zinc-50 rounded-2xl border border-brand-border/50 text-black mb-6">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Custom Configuration &amp; Bulk Procurement</h2>
              <p className="text-lg text-brand-muted mb-10 leading-relaxed">
                If your lab or production facility requires high-current configuration, customized liquid-cooled options, or formal commercial bidding/RFQ, contact our integration team directly on the store's helpdesk.
              </p>
              <a
                href={shopUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center gap-2 text-base font-bold hover:underline"
              >
                Inquire via Store Helpdesk <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
