import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <Link href="/" className="text-black font-bold underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
