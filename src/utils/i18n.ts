import intl from "react-intl-universal";
import enUS from "../locales/en-US.json";
import deDE from "../locales/de-DE.json";

const locales = {
  "en-US": enUS,
  "de-DE": deDE,
};

export const initI18n = async (currentLocale = "en-US") => {
  await intl.init({
    currentLocale,
    locales,
  });
  return intl;
};

export { intl };
