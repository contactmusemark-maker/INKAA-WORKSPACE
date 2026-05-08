'use client';
import { useState } from 'react';
export default function Page(){
  const [score,setScore]=useState<number|null>(null);
  return <div className="rounded-luxe bg-white dark:bg-neutral-900 p-8 shadow-soft space-y-4"><h1 className="text-4xl font-light">Customer Database</h1><p className="text-inkaa-muted">Lead scoring, follow-up drafting, and lifecycle tracking.</p><button onClick={async()=>{const r=await fetch('/api/leads/score',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({engagement:80,budget:60,intent:90})});const j=await r.json();setScore(j.score);}} className="rounded-xl bg-black text-white px-4 py-2">Run AI Lead Scoring</button>{score!==null&&<p>Computed score: {score}</p>}</div>;
}
