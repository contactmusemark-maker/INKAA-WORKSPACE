export default function SignUpPage() {
  return (
    <main className="min-h-screen grid place-items-center bg-inkaa-bgSoft">
      <div className="w-full max-w-xl rounded-[36px] border bg-white p-8 shadow-soft">
        <h1 className="text-5xl font-light">Create workspace</h1>
        <form className="space-y-3 mt-6" aria-label="Sign up form">
          <input placeholder="Company" className="w-full rounded-2xl border p-4" />
          <input placeholder="Email" className="w-full rounded-2xl border p-4" />
          <input placeholder="Password" type="password" className="w-full rounded-2xl border p-4" />
          <button className="w-full rounded-2xl bg-black text-white py-4">Get Started</button>
        </form>
      </div>
    </main>
  );
}
