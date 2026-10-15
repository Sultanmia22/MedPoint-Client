// src/app/(mainLayout)/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function MainLayoutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // useful for debugging
    console.error("MainLayout segment error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-6 text-center space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Something went wrong
        </h2>

        <p className="text-sm text-gray-600">
          This section couldn’t load due to an unexpected error. You can try
          again or go back to home.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
          >
            Try again
          </button>

          <Link
            href="/"
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
