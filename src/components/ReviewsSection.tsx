import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { FEEDBACK_ENDPOINT, type Review } from "@/lib/feedback";

/**
 * Reviews left through the /feedback page and marked "Approved" in the
 * feedback Google Sheet. Renders nothing until there is at least one.
 */
const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (!FEEDBACK_ENDPOINT) return;
    let cancelled = false;
    fetch(FEEDBACK_ENDPOINT)
      .then((r) => r.json() as Promise<{ reviews?: Review[] }>)
      .then((data) => {
        if (!cancelled && Array.isArray(data.reviews)) setReviews(data.reviews);
      })
      .catch(() => {
        /* keep the section hidden if the sheet can't be reached */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section id="reviews" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-gradient">What People Say</h2>
          <div className="mx-auto mb-6 h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500" />
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Words from people I&apos;ve mentored, consulted and collaborated with.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-effect nebula-glow relative flex flex-col rounded-2xl p-6"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-purple-400/30" />
              <div className="flex gap-0.5" aria-label={`${r.rating} out of 5`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={
                      n <= r.rating
                        ? "h-4 w-4 fill-yellow-400 text-yellow-400"
                        : "h-4 w-4 text-gray-600"
                    }
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-gray-200">
                &ldquo;{r.message}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-white">{r.name}</span>
                {r.role && <span className="text-gray-400"> · {r.role}</span>}
                {r.sessionType && (
                  <span className="mt-1 block text-xs text-purple-300">
                    {r.sessionType} session
                  </span>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
