import { z } from 'zod';
export const env = z.object({ DATABASE_URL: z.string().url(), NEXT_PUBLIC_SUPABASE_URL: z.string().url(), NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(), OPENAI_API_KEY: z.string(), STRIPE_SECRET_KEY: z.string(), NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string() }).parse(process.env);
