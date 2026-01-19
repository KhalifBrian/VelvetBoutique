import { z } from 'zod';

export const addressSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(6),
  country: z.string().min(2),
  city: z.string().min(2),
  street: z.string().min(3),
  postalCode: z.string().min(2),
});

export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
