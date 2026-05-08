import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SESSION_COOKIE = 'inkaa_session';

export function getSession() {
  return cookies().get(SESSION_COOKIE)?.value;
}

export function requireSession() {
  const session = getSession();
  if (!session) redirect('/login');
  return session;
}

export function createMockSession(email: string) {
  cookies().set(SESSION_COOKIE, email, { httpOnly: true, sameSite: 'lax', path: '/' });
}

export function clearSession() {
  cookies().delete(SESSION_COOKIE);
}
