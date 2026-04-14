import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { name: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-muted mb-8">
      <Link href="/" className="hover:text-black flex items-center gap-1">
        <Home className="w-3 h-3" />
      </Link>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3 opacity-30" />
          {item.href ? (
            <Link href={item.href} className="hover:text-black">
              {item.name}
            </Link>
          ) : (
            <span className="text-black">{item.name}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
