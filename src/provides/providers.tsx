import { ThemeProvider } from "@/components/theme/theme-provider";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}     
    </ThemeProvider>
  );
}