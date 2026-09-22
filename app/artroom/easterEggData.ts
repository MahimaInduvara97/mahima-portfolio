export const LOCKER_CONFIG = {
  code: "IMBATMAN",
  image: "/i-am-batman.jpg",
  whatsappNumber: "94774166098",
  whatsappMessage: "Hey! I found the secret locker on your portfolio 😄 Can I get the locker code?",
} as const;

export const LOCKER_WHATSAPP_URL = `https://wa.me/${LOCKER_CONFIG.whatsappNumber}?text=${encodeURIComponent(LOCKER_CONFIG.whatsappMessage)}`;

// Placeholder testimonial copy — replace with approved client quotes before production if needed.
export const testimonials = [
  {
    name: "Peruka",
    company: "Nuts On Top",
    quote: "Working together was easy from start to finish. He understood the idea quickly and turned it into a clean, modern website that feels simple to use.",
  },
  {
    name: "Palitha Hearth",
    company: "Luminex",
    quote: "What I liked most was the attention to detail. The final result looked polished, worked smoothly, and the whole process felt well organized.",
  },
  {
    name: "Chamod Osanka",
    company: "Fly Catcher Trails",
    quote: "He brought both development and creative thinking into the project. Ideas were explained clearly, changes were handled quickly, and the final experience felt much stronger than the first concept.",
  },
] as const;
