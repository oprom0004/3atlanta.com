import Link from "next/link";
import { voltagePages, intentPages } from "../data/seoContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-border/50 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex flex-col leading-none mb-6">
              <span className="font-bold text-2xl tracking-tight">3Atlanta</span>
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-[0.2em] mt-1">
                Programmable DC
              </span>
            </div>
            <p className="text-brand-muted max-w-sm leading-relaxed text-sm">
              Specialized distribution and technical support for eTommens industrial variable dc power supply systems.
            </p>
            <p className="text-brand-muted max-w-sm leading-relaxed text-xs mt-4">
              Authorized Outlet of <Link href="/where-to-buy" className="underline hover:text-black">VariableDCPowerSupply.com</Link>.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-brand-muted">
              {voltagePages.slice(0, 4).map(p => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="hover:text-black transition-colors">
                    {p.slug.split('-')[0].toUpperCase()} DC Power Supply
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-brand-muted">
              {intentPages.slice(1, 4).map(p => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="hover:text-black transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-brand-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium text-brand-muted uppercase tracking-widest">
          <p>&copy; {currentYear} 3ATLANTA INDUSTRIAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
