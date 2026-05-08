'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login(){
  const [email,setEmail]=useState('');
  const router = useRouter();
  return <main className="min-h-screen grid md:grid-cols-2 p-6 gap-6"><section className="rounded-luxe bg-inkaa-sidebar text-white p-10"><h1 className="text-5xl font-light">INKAA</h1><p className="mt-4 text-white/70">Cinematic AI-native CRM workspace.</p></section><section className="rounded-luxe glass p-10"><h2 className="text-3xl font-light mb-6">Welcome back</h2><form className="space-y-4" onSubmit={async(e)=>{e.preventDefault(); await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})}); router.push('/dashboard');}}><input className="w-full rounded-2xl border p-3" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><input className="w-full rounded-2xl border p-3" placeholder="Password" type="password"/><button className="w-full rounded-2xl bg-gradient-to-r from-inkaa-red to-inkaa-redBright text-white py-3">Sign in</button></form></section></main>;
}
