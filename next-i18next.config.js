const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
    defaultNS: "all",
    localePath: path.resolve("./locales"),
  },
};
