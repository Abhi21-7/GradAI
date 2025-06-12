import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "gradai", // Unique app ID
  name: "GradAI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
