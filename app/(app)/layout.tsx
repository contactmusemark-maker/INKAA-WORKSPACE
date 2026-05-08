import { Sidebar } from '@/components/layout/sidebar';
export default function AppLayout({ children }: { children: React.ReactNode }) { return <div className="min-h-screen p-6 pl-[21rem]"><Sidebar />{children}</div>; }
