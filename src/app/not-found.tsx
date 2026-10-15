import Link from "next/link";

export default function MainLayoutNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border bg-base-100 p-6 text-center space-y-3">
        <h2 className="text-xl font-semibold text-base-content">Page not found</h2>
        <p className="text-sm text-base-content/70">
          The page you’re looking for doesn’t exist.
        </p>

        <div className="flex justify-center gap-3 pt-2">
          <Link href="/" className="px-4 py-2 rounded-lg bg-primary text-white">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}