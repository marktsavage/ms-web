export const SITE = {
  // website: "https://marktsavage.co.uk/",
  website: "https://marktsavage.github.io",
  author: "Mark Savage",
  profile: "https://",
  desc: "Mindfulness-based psychotherapy and counselling",
  title: "Mark Savage",
  pageTitle: "Mindfulness Psychotherapy | Mark Savage",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Dublin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
