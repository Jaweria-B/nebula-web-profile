/**
 * Feedback + reviews config.
 *
 * Submissions are saved to a Google Sheet through a Google Apps Script web app
 * (see docs/feedback-setup.md). Put the web app URL in the
 * VITE_FEEDBACK_ENDPOINT environment variable (Vercel project settings).
 */
export const FEEDBACK_ENDPOINT: string =
  (import.meta.env.VITE_FEEDBACK_ENDPOINT as string | undefined) ?? "";

/** Session types offered on the form. */
export const SESSION_TYPES = [
  "Mentoring",
  "Collaboration",
  "Consultation",
  "Other",
] as const;

export type Review = {
  name: string;
  role: string;
  rating: number;
  message: string;
  sessionType: string;
};
