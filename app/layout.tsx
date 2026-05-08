import './globals.css';
import type { Metadata } from 'next';
import { AppProviders } from '@/components/providers/app-providers';

export const metadata: Metadata = {
  title: 'INKAA Workspace',
  description: 'Futuristic AI-native CRM platform',
  metadataBase: new URL('https://inkaa.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
