import { ThemeProvider } from "next-themes";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { TanstackQueryProvider } from "./tanstack-query-provider";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <body
      className={`${manropeSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <TanstackQueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </TanstackQueryProvider>
    </body>
  );
};
