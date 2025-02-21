import site from "./siteMetadata.js";

let lang = "en-US";
let timeZone = "America/New_York";

export default {
  absoluteUrl: (data) => {
    if (data.page.url && data.page.permalink !== false) {
      return new URL(data.page.url, site.siteUrl).href;
    } else {
      return null;
    }
  },
  isoDate: (data) => data.page.date.toISOString(),
  sitemapDate: (data) =>
    data.page.date.toLocaleString(lang, { year: "numeric", timeZone }) +
    "-" +
    data.page.date.toLocaleString(lang, { month: "2-digit", timeZone }) +
    "-" +
    data.page.date.toLocaleString(lang, { day: "2-digit", timeZone }),
  formattedDate: (data) =>
    data.page.date.toLocaleString(lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone,
    }),
};
