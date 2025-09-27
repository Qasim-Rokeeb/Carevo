import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {ThemeProvider} from '@/components/theme-provider';
import {CookieConsentBanner} from '@/components/cookie-consent-banner';
import {SkipToContent} from '@/components/skip-to-content';
import {ReducedDataProvider} from '@/contexts/reduced-data-provider';

export const metadata: Metadata = {
  title: 'Carevo',
  description: 'Health Information You Can Hear, Anytime, Anywhere.',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://picsum.photos/seed/about/600/400"
          as="image"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReducedDataProvider>
            <SkipToContent />
            {children}
            <Toaster />
            <CookieConsentBanner />
          </ReducedDataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
