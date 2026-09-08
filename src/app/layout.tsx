import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://scraperdevbd.fun'),
  title: {
    default: 'ScraperDevBD | Asif Parvez - AI Automation, Web & Discord Bot Developer',
    template: '%s | ScraperDevBD'
  },
  description: 'Official portfolio of Asif Parvez (ScraperDevBD) — High school developer from Bangladesh specializing in AI Automation, Next.js Web Development, Discord Bot Architecture, and Modrinth open-source creations.',
  keywords: [
    'ScraperDevBD',
    'Asif Parvez',
    'Asif Parvez Dev',
    'AI Automation',
    'Web Scraping',
    'Website Building',
    'Discord Bot Automation',
    'Modrinth Developer',
    'Bangladesh High School Developer',
    'Next.js Portfolio',
    'TypeScript Developer'
  ],
  authors: [{ name: 'Asif Parvez (ScraperDevBD)', url: 'https://scraperdevbd.fun' }],
  creator: 'Asif Parvez (ScraperDevBD)',
  publisher: 'ScraperDevBD',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://scraperdevbd.fun',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scraperdevbd.fun',
    siteName: 'ScraperDevBD Portfolio',
    title: 'ScraperDevBD | Asif Parvez Portfolio',
    description: 'AI Automation, Website Building, Discord Bot Architecture, and Modrinth Projects by Bangladeshi Developer Asif Parvez.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScraperDevBD | Asif Parvez Portfolio',
    description: 'AI Automation, Website Building, Discord Bot Architecture, and Modrinth Projects by Bangladeshi Developer Asif Parvez.',
    creator: '@scraperdevbd',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Asif Parvez',
    alternateName: 'ScraperDev BD',
    url: 'https://scraperdevbd.fun',
    email: 'scraperdev.bd@gmail.com',
    jobTitle: 'AI Automation & Full-Stack Web Developer',
    nationality: 'Bangladeshi',
    sameAs: [
      'https://github.com/scraperdevbd',
      'https://modrinth.com/user/scraperdev.bd',
    ],
    knowsAbout: [
      'AI Automation',
      'Web Scraping',
      'Next.js Web Building',
      'TypeScript',
      'Discord Bot Infrastructure',
      'Modrinth Minecraft Modding',
    ],
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ScraperDevBD Portfolio',
    url: 'https://scraperdevbd.fun',
    description: 'Official portfolio website for Asif Parvez (ScraperDevBD)',
    author: {
      '@type': 'Person',
      name: 'Asif Parvez',
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] font-sans antialiased selection:bg-emerald-500/30 selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
