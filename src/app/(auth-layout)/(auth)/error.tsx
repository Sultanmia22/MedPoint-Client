"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Auth segment error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 p-6 text-center">
      <h2 className="text-xl font-semibold">Something went wrong</h2>

      <p className="text-sm text-gray-500 max-w-md">
        This page crashed. You can try again or go back to the home page.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => reset()}
          className="px-4 py-2 rounded bg-primary text-white"
        >
          Try again
        </button>

        <Link href="/" className="px-4 py-2 rounded border">
          Back to Home
        </Link>
      </div>

    </div>
  );
}
