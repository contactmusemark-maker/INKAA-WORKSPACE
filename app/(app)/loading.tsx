export default function Loading(){
  return <div className='animate-pulse grid md:grid-cols-3 gap-4'>
    {Array.from({length:6}).map((_,i)=><div key={i} className='h-40 rounded-luxe bg-white/60'/>) }
  </div>;
}
