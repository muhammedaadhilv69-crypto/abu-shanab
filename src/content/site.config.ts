// EVERYTHING client-specific lives in this file. Edit it, then swap images in /public/images.
// Part 1: things that are the same in every language.
// Part 2: the text, once per language (English + Arabic).
//
// Client: Abu Shanab Mens Salon
// TODO markers = details I could not know. Fill them from their Instagram before sending.

import type { Locale } from "@/lib/i18n";

type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export const site = {
  url: "https://abu-shanab.vercel.app", 
  timezone: "Asia/Bahrain",

  whatsapp: "97334235657",
  phone: "+973 3423 5657", 
  mapsUrl: "https://www.google.com/maps/place/Abu+Shanab+Mens+Salon+Gudaibiya/@26.2281585,50.5883729,17z/data=!4m14!1m7!3m6!1s0x3e49af08bf6bacc9:0x64621ef8e7c5dbed!2sAbu+Shanab+Mens+Salon+Gudaibiya!8m2!3d26.2281585!4d50.5909478!16s%2Fg%2F11z5v72z4y!3m5!1s0x3e49af08bf6bacc9:0x64621ef8e7c5dbed!8m2!3d26.2281585!4d50.5909478!16s%2Fg%2F11z5v72z4y?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D", 
  instagram: "https://www.instagram.com/abushanabsalon.bh/", 

  // Brand colors (any hex): black background, white accent
  colors: {
    primary: "#0A0A0A", // hero, header, footer background
    accent: "#FFFFFF", // main buttons
    ink: "#141414", // body text
    paper: "#F4F4F4", // page background
    mist: "#DADADA", // borders and soft panels
  },

  // Gallery photos: drop files in /public/images and list them here (alt text is in the language sections below)
  // TODO: replace with real photos from their IG (or their logo + shop photos)
  gallery: ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.svg", "/images/5.svg", "/images/6.svg"],

  // Opening hours, 24h format. open: null = closed that day. Day order here is the display order.
  // TODO: replace with their real hours
  hours: [
    { day: "Sat", open: "10:00", close: "23:00" },
    { day: "Sun", open: "10:00", close: "23:00" },
    { day: "Mon", open: "10:00", close: "23:00" },
    { day: "Tue", open: "10:00", close: "23:00" },
    { day: "Wed", open: "10:00", close: "23:00" },
    { day: "Thu", open: "10:00", close: "23:30" },
    { day: "Fri", open: "16:00", close: "23:30" },
  ] as { day: Day; open: string | null; close: string | null }[],
};

export type Copy = {
  name: string;
  tagline: string;
  description: string;
  address: string;
  cta: string;
  call: string;
  instagram: string;
  whatsappMessage: string;
  switchLabel: string; // label of the button that switches to the OTHER language
  mapsLabel: string;
  sections: {
    services: string;
    gallery: string;
    testimonials: string;
    hours: string;
    findUs: string;
    contact: string;
    contactText: string;
  };
  status: { open: string; opensToday: string; closedToday: string; closedNow: string }; // {time} is replaced
  time: { am: string; pm: string; to: string; closed: string };
  days: Record<Day, string>;
  services: { title: string; description: string; price: string }[]; // price "" hides it
  galleryAlts: string[];
  testimonials: { quote: string; name: string }[]; // [] hides the section
};

const en: Copy = {
  name: "Abu Shanab Mens Salon",
  tagline: "Sharp cuts, clean shaves and well-kept beards.",
  description: "Abu Shanab Mens Salon in Bahrain. Haircuts, beard trims and shaves. Book on WhatsApp.",
  address: "2161 Manama Qudaybiyah, 321", // TODO: full address (building, road, block, area)
  cta: "Book on WhatsApp",
  call: "Call",
  instagram: "@abushanabsalon.bh",
  whatsappMessage: "Hi! I'd like to book an appointment.",
  switchLabel: "العربية",
  mapsLabel: "Open in Google Maps",
  sections: {
    services: "Services",
    gallery: "Recent work",
    testimonials: "What customers say",
    hours: "Opening hours",
    findUs: "Find us",
    contact: "Ready for a fresh cut?",
    contactText: "Send us a message with the day and time that suits you. We reply on WhatsApp.",
  },
  status: {
    open: "Open now, closes at {time}",
    opensToday: "Closed, opens today at {time}",
    closedToday: "Closed today",
    closedNow: "Closed for today",
  },
  time: { am: "AM", pm: "PM", to: "to", closed: "Closed" },
  days: { Sat: "Saturday", Sun: "Sunday", Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday" },
  // TODO: confirm services from their IG and add real prices (price "" hides the price until then)
  services: [
    { title: "Haircut", description: "Scissor or clipper cut, styled the way you like it.", price: "BD 1" },
    { title: "Beard trim and shape", description: "Clean lines and a balanced shape.", price: "BD 1.5" },
    { title: "Shave", description: "A clean, smooth shave.", price: "BD 1" },
    { title: "Kids' cut", description: "Under 12. Patient barbers and a calm chair.", price: "BD 1" },
    { title: "Haircut and beard", description: "The full routine in one visit.", price: "BD 2.5" },
  ],
  galleryAlts: ["Fresh haircut", "Beard shaping", "Clean shave", "Salon interior", "Barber chair", "Finished cut"],
  testimonials: [], // hidden until we have real reviews
};

const ar: Copy = {
  name: "صالون أبو شنب للرجال", // TODO: match the exact Arabic spelling they use on IG
  tagline: "قصّات أنيقة وحلاقة نظيفة وعناية باللحية.",
  description: "صالون أبو شنب للرجال في البحرين. قص الشعر، تشذيب اللحية، والحلاقة. احجز عبر واتساب.",
  address: "البحرين", 
  cta: "احجز عبر واتساب",
  call: "اتصل",
  instagram: "@abushanabsalon.bh",
  whatsappMessage: "مرحباً! أرغب بحجز موعد.",
  switchLabel: "English",
  mapsLabel: "افتح في خرائط Google",
  sections: {
    services: "الخدمات",
    gallery: "أحدث أعمالنا",
    testimonials: "آراء عملائنا",
    hours: "ساعات العمل",
    findUs: "موقعنا",
    contact: "جاهز لقصّة جديدة؟",
    contactText: "أرسل لنا اليوم والوقت المناسبين لك، وسنردّ عليك عبر واتساب.",
  },
  status: {
    open: "مفتوح الآن، يغلق في الساعة {time}",
    opensToday: "مغلق الآن، يفتح اليوم في الساعة {time}",
    closedToday: "مغلق اليوم",
    closedNow: "مغلق لهذا اليوم",
  },
  time: { am: "ص", pm: "م", to: "إلى", closed: "مغلق" },
  days: { Sat: "السبت", Sun: "الأحد", Mon: "الاثنين", Tue: "الثلاثاء", Wed: "الأربعاء", Thu: "الخميس", Fri: "الجمعة" },
  services: [
    { title: "قص الشعر", description: "قصّ بالمقص أو الماكينة، وتسريحة على ذوقك.", price: "" },
    { title: "تحديد شكل اللحية وتنسيقها", description: "خطوط واضحة وشكل متوازن.", price: "" },
    { title: "حلاقة", description: "حلاقة نظيفة وناعمة.", price: "" },
    { title: "قص الأطفال", description: "لمن هم دون 12 سنة. حلاقون صبورون وكرسي هادئ.", price: "" },
    { title: "قص الشعر مع اللحية", description: "الخدمة الكاملة في زيارة واحدة.", price: "" },
  ],
  galleryAlts: ["قصة جديدة", "تشكيل اللحية", "حلاقة نظيفة", "داخل الصالون", "كرسي الحلاقة", "قصة منتهية"],
  testimonials: [],
};

export const copy: Record<Locale, Copy> = { en, ar };

export const whatsappLink = (t: Copy) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`;
export const telLink = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
