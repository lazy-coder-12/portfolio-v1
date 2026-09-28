"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

function ThemeQuerySync() {
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get("theme");
    if (themeParam === "light" || themeParam === "dark") {
      setTheme(themeParam);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(themeParam);
    }
  }, [setTheme]);

  return null;
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      <ThemeQuerySync />
      {children}
    </NextThemesProvider>
  );
}
