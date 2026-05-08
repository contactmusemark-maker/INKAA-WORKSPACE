import { Bell, Calendar, Phone, Search, Send, Settings, BarChart3, LayoutDashboard, Users, MessageCircle, CheckSquare, FileText } from 'lucide-react';

const nav = [
  ['Dashboard', LayoutDashboard], ['Leads', Users], ['Messages', MessageCircle], ['Calls', Phone], ['Analytics', BarChart3], ['Tasks', CheckSquare], ['Documents', FileText], ['Calendar', Calendar], ['Settings', Settings]
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-inkaa-bg to-inkaa-bgSoft">
      <div className="grid grid-cols-1 xl:grid-cols-[260px,1fr] gap-6">
        <aside className="rounded-[36px] bg-inkaa-sidebar text-white p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-10"><div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-inkaa-red to-inkaa-redAccent" /><span className="text-3xl font-light tracking-wide">INKAA</span></div>
          <div className="space-y-3">{nav.map(([label, Icon], i)=><button key={String(label)} className={`w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${i===0?'bg-gradient-to-r from-inkaa-redDark to-inkaa-red':'hover:bg-white/10'}`}><Icon size={18}/>{label}</button>)}</div>
        </aside>
        <section className="space-y-6">
          <header className="flex items-center justify-between"><div className="glass rounded-[30px] px-5 py-3 w-[480px] max-w-full border border-inkaa-border flex gap-2"><Search/><input className="bg-transparent outline-none w-full" placeholder="Search anything..."/></div><div className="flex gap-3"><button className="glass rounded-full p-3"><Bell/></button><div className="h-11 w-11 rounded-full bg-inkaa-red"/></div></header>
          <div className="grid md:grid-cols-4 gap-4">{['Worklist','New Leads','Updates','Assigned'].map((m,i)=><article key={m} className="rounded-[30px] glass border border-inkaa-border p-6 shadow-soft"><p className="text-inkaa-muted">{m}</p><p className="text-5xl font-light mt-2">{[24,37,18,12][i]}</p></article>)}</div>
          <div className="grid lg:grid-cols-[1.3fr,.7fr] gap-5">
            <div className="rounded-[34px] bg-inkaa-panel border border-inkaa-border p-6 space-y-5">
              <h1 className="text-5xl font-light">Jessie Caballero</h1>
              <div className="grid md:grid-cols-2 gap-4">
                <article className="rounded-[28px] bg-inkaa-panelSoft p-4 border border-inkaa-border"><p className="text-inkaa-muted">Timeline</p><p>Negotiation Started · Proposal Sent · AI follow-up prepared.</p></article>
                <article className="rounded-[28px] bg-inkaa-panelSoft p-4 border border-inkaa-border"><p className="text-inkaa-muted">AI Messaging</p><p>Suggested reply based on sentiment: "Absolutely! Sending it over."</p></article>
              </div>
              <div className="rounded-[28px] glass p-4 border border-inkaa-border"><p className="text-sm text-inkaa-muted mb-2">Type your message...</p><div className="flex justify-between"><div className="text-inkaa-muted">AI assistant shortcut · voice · emoji · attachments</div><button className="h-12 w-12 rounded-full bg-gradient-to-r from-inkaa-redDark to-inkaa-red text-white grid place-items-center"><Send size={18}/></button></div></div>
            </div>
            <div className="space-y-4">
              <article className="rounded-[34px] bg-[#efe9ff] p-6 border border-inkaa-border"><h2 className="text-3xl font-light">Deal Insight</h2><p className="text-inkaa-muted mt-2">Potential profit</p><p className="text-5xl font-light">$25,000</p></article>
              <article className="rounded-[34px] bg-[#ffeef0] p-6 border border-inkaa-border"><h2 className="text-2xl font-light">Task Panel</h2><button className="w-full mt-4 rounded-2xl py-3 bg-gradient-to-r from-inkaa-redDark to-inkaa-red text-white">Send for Approval</button></article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
