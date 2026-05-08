export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-inkaa-bg">
      <section className="p-12 flex flex-col justify-center">
        <h1 className="text-6xl font-light">Welcome to INKAA</h1>
        <p className="text-inkaa-muted mt-3">AI-native CRM for elite teams.</p>
        <form className="mt-8 space-y-3" aria-label="Login form">
          <input placeholder="Email" className="w-full rounded-2xl border p-4" />
          <input placeholder="Password" type="password" className="w-full rounded-2xl border p-4" />
          <button className="w-full rounded-2xl bg-gradient-to-r from-inkaa-redDark to-inkaa-red text-white py-4">Sign In</button>
        </form>
      </section>
      <section className="hidden lg:block bg-gradient-to-br from-inkaa-sidebar to-[#1e0c0c] rounded-l-[42px]" />
    </main>
  );
}
