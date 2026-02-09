import { Spinner } from "@/components/ui/spinner";
import { MainAppLayout } from "@/layouts/MainAppLayout";
import { Suspense } from "react";
import { Outlet } from "react-router";

export const SlidesPage = () => {
  return (
    <MainAppLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </section>
    </MainAppLayout>
  );
};
