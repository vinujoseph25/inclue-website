import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
}

const defaultDescription =
  "Inclue Technologies provides innovative solutions in manufacturing and healthcare with IoT and automation technology.";
const defaultKeywords =
  "Inclue Technologies, IoT, automation, manufacturing, healthcare, Babble, PLC solutions";
const defaultOgImage = "/assets/images/seo/og-image.png";
const defaultTwitterCard = "summary_large_image";
const defaultOgType = "website";

const SEO: React.FC<SEOProps> = ({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage = defaultOgImage,
  ogUrl,
  ogType = defaultOgType,
  twitterCard = defaultTwitterCard,
}) => {
  const siteUrl = "https://www.incluetech.com";
  const fullTitle = `${title} | Inclue Technologies`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:type" content={ogType} />
      {ogUrl && <meta property="og:url" content={`${siteUrl}${ogUrl}`} />}

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Canonical link */}
      {ogUrl && <link rel="canonical" href={`${siteUrl}${ogUrl}`} />}
    </Helmet>
  );
};

export default SEO;
