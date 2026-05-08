export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-luxe bg-white dark:bg-neutral-900 p-5 shadow-soft border border-black/5 dark:border-white/10"><h3 className="text-lg font-medium mb-3">{title}</h3>{children}</section>;
}
export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="rounded-2xl border border-dashed p-8 text-center text-sm text-inkaa-muted"><p className="font-medium text-inkaa-text dark:text-white">{title}</p><p>{description}</p></div>;
}
export function Skeleton({ className = 'h-4 w-full' }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-neutral-200 dark:bg-neutral-700 ${className}`} />;
}
