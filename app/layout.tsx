import './globals.css';
import { AppProviders } from '@/components/providers/app-providers';

export const metadata = { title: 'INKAA Workspace', description: 'Futuristic AI-native CRM platform' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><AppProviders>{children}</AppProviders></body></html>;
}
