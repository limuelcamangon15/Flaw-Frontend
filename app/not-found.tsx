"use client";

import { ChevronLeft } from "lucide-react";
import Button from "./components/ui/button/Button";
import PageLayout from "./components/ui/layout/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-2 items-center justify-center w-full min-h-full">
        <p className="font-heading text-9xl tracking-tighter">404</p>
        <p className="font-heading text-3xl text-amber-500">Page Not Found</p>

        <p className="font-sans text-center px-10 mb-5">
          The page you&apos;re looking for doesn&apos;t exist, may have been
          moved, or the URL might be incorrect.
        </p>

        <Button
          label="Go Back"
          color="white"
          icon={<ChevronLeft />}
          onClick={() => history.back()}
        />
      </div>
    </PageLayout>
  );
}
