import { z } from 'zod';

export const Env = z.object({
  TELEGRAM_TOKEN: z.string().min(1),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
});

export type Env = z.infer<typeof Env>;
