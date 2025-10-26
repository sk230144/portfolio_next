'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(data: unknown): Promise<FormState> {
  const parsed = formSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      error: "Invalid form data.",
    };
  }
  try {
    await addDoc(collection(db, "messages"), {
      ...parsed.data,
      createdAt: serverTimestamp(),
    });
    return { success: true };
  } catch (err) {
    console.error("Error submitting form:", err);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
