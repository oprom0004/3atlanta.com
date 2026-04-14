import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { allSEOPages } from "../../data/seoContent";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return allSEOPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = allSEOPages.find((item) => item.slug === slug);
  if (!content) {
    return {
      title: "Page Not Found | 3Atlanta",
      description: "The page you requested was not found.",
    };
  }

  return {
    title: `${content.title} | 3Atlanta Industrial`,
    description: content.description,
    keywords: [
      content.title,
      content.slug.replace(/-/g, " "),
      ...content.features.slice(0, 3),
      ...content.applications.slice(0, 2),
      "3atlanta",
      "variable dc power supply",
    ],
    alternates: {
      canonical: `/${content.slug}`,
    },
    openGraph: {
      title: `${content.title} | 3Atlanta Industrial`,
      description: content.description,
      url: `/${content.slug}`,
      siteName: "3Atlanta",
      type: "article",
      images: [
        {
          url: "/eTM-3050U.png",
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.title} | 3Atlanta Industrial`,
      description: content.description,
      images: ["/eTM-3050U.png"],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const content = allSEOPages.find((item) => item.slug === slug);
  if (!content) {
    notFound();
  }

  const defaultTargetUrl = "https://variabledcpowersupply.com";
  const targetUrl = content.externalUrl || defaultTargetUrl;

  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto px-6 pt-12">
          <Breadcrumbs items={[{ name: content.title }]} />
        </div>

        <section className="bg-white border-b border-brand-border/50">
          <div className="max-w-[1200px] mx-auto px-6 py-24">
            <span className="inline-block px-4 py-1 rounded-full bg-zinc-100 text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-6">
              Technical Specification / {content.slug.toUpperCase()}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight max-w-4xl">
              {content.title}
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed max-w-3xl">
              {content.description}
            </p>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">Technical Overview</h2>
                <p className="text-lg text-brand-muted leading-relaxed">
                  {content.technicalDetails}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {content.features.map((feature) => (
                    <div key={feature} className="flex gap-4 p-6 bg-white rounded-[24px] border border-brand-border/50 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-1" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8">Primary Applications</h2>
                <div className="space-y-4">
                  {content.applications.map((app) => (
                    <div key={app} className="flex items-center justify-between p-6 bg-zinc-50 rounded-[20px] border border-brand-border/50">
                      <span className="font-bold">{app}</span>
                      <ChevronRight className="w-4 h-4 text-brand-muted" />
                    </div>
                  ))}
                </div>
              </div>

              {content.comparisonTable && (
                <div className="overflow-hidden rounded-[32px] border border-brand-border/50 bg-white shadow-sm">
                  <div className="p-8 border-b border-brand-border/50 bg-zinc-50">
                    <h2 className="text-2xl font-bold">Model Comparison</h2>
                    <p className="text-sm text-brand-muted mt-2">Technical specifications for common configurations.</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-zinc-50/50 text-[11px] font-bold uppercase tracking-widest text-brand-muted border-b border-brand-border/50">
                          <th className="px-8 py-4">Model</th>
                          <th className="px-8 py-4">Voltage</th>
                          <th className="px-8 py-4">Current</th>
                          <th className="px-8 py-4">Power</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-border/50">
                        {content.comparisonTable.map((row) => (
                          <tr key={row.model} className="hover:bg-zinc-50 transition-colors">
                            <td className="px-8 py-5 font-bold text-sm">{row.model}</td>
                            <td className="px-8 py-5 text-sm text-brand-muted">{row.voltage}</td>
                            <td className="px-8 py-5 text-sm text-brand-muted">{row.current}</td>
                            <td className="px-8 py-5 text-sm text-brand-muted">{row.power}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {content.faqs && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold">Technical FAQ</h2>
                  <div className="space-y-4">
                    {content.faqs.map((faq) => (
                      <div key={faq.question} className="p-8 bg-white rounded-[24px] border border-brand-border/50 shadow-sm">
                        <h4 className="font-bold mb-3 flex gap-3">
                          <span className="text-zinc-400">Q:</span>
                          {faq.question}
                        </h4>
                        <p className="text-brand-muted text-sm leading-relaxed flex gap-3">
                          <span className="text-zinc-400 font-bold italic">A:</span>
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-8">
              <div className="p-8 bg-black text-white rounded-[32px] sticky top-32">
                <div className="tech-label text-zinc-500 mb-4">Direct Fulfillment</div>
                <h3 className="text-xl font-bold mb-4">Procurement Hub</h3>
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                  Access real-time stock, factory-direct pricing, and official eTommens warranty support through our primary fulfillment center.
                </p>
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener"
                  className="w-full py-4 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
                >
                  Check Availability &amp; Pricing <ExternalLink className="w-4 h-4" />
                </a>
                <div className="mt-6 pt-6 border-t border-zinc-800 text-[10px] text-zinc-500 text-center uppercase tracking-widest">
                  Official Distribution Partner
                </div>
              </div>

              <div className="p-8 bg-white border border-brand-border/50 rounded-[32px]">
                <h3 className="font-bold mb-4">Technical Documentation</h3>
                <div className="space-y-4">
                  <a href={targetUrl} target="_blank" rel="noopener" className="flex items-center justify-between text-sm text-brand-muted hover:text-black transition-colors group">
                    <span>Download SCPI Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href={targetUrl} target="_blank" rel="noopener" className="flex items-center justify-between text-sm text-brand-muted hover:text-black transition-colors group">
                    <span>Safety Protocols</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-zinc-100 py-24 border-t border-brand-border/50">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Order?</h2>
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center px-12 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all"
            >
              View Pricing on VariableDCPowerSupply.com <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <Link href="/" className="text-sm font-bold underline">
            Return Home
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
