'use client';
import { useState } from 'react';
const initial: Record<string,string[]>={Prospect:['Aster Labs','Northwind'],Qualified:['Globex'],Proposal:['Innotech'],Closed:['Helios Bio']};
export function PipelineBoard(){
  const [columns,setColumns]=useState(initial);
  const [active,setActive]=useState<{from:string;deal:string}|null>(null);
  const move=(to:string)=>{ if(!active)return; setColumns((prev)=>({ ...prev, [active.from]: prev[active.from].filter((d)=>d!==active.deal), [to]: [...prev[to],active.deal]})); setActive(null);};
  return <div className="grid md:grid-cols-4 gap-4">{Object.entries(columns).map(([stage,deals])=><div key={stage} onDragOver={(e)=>e.preventDefault()} onDrop={()=>move(stage)} className="rounded-luxe bg-white dark:bg-neutral-900 p-4 min-h-60"><h4 className="font-medium mb-3">{stage}</h4><div className="space-y-2">{deals.map((deal)=><div key={deal} draggable onDragStart={()=>setActive({from:stage,deal})} className="cursor-grab rounded-xl bg-inkaa-panelSoft dark:bg-neutral-800 p-3">{deal}</div>)}</div></div>)}</div>;
}
