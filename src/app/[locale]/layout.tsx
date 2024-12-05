import type { Metadata } from "next";
import localFont from "next/font/local";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "@/components/providers";

const workSans = localFont({
  src: [
    {
      path: "../fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Make & Sell Courses",
  description: "Make & Sell Courses",
};

export default async function RootLayout({
  children,
  params: { locale },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${workSans.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
