import { NextSeo } from "next-seo";

export default function Head({
  title = "Cantina",
  description = "The first marketplace for web3 security. We've aggregated the security talent and solutions so you don't have to.",
  image = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/twitter-banner.png`,
    width: 2000,
    height: 1000,
    alt: "Cantina banner",
  },
  canonicalURL = "",
  type = "website",
  profile,
}: {
  title?: string;
  description?: string;
  image?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  canonicalURL?: string;
  type?: string;
  profile?: {
    username: string;
  };
}) {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: canonicalURL,
        title,
        description,
        //eslint-disable-next-line camelcase
        site_name: "Cantina",
        locale: "en_EN",
        type,
        profile,
        images: [
          {
            url: image.url,
            width: image.width,
            height: image.height,
            alt: image.alt,
          },
        ],
      }}
      twitter={{
        handle: "@cantinaxyz",
        site: "@cantinaxyz",
        cardType: type === "profile" ? "player" : "summary_large_image",
      }}
      additionalMetaTags={[
        {
          name: "viewport",
          content: "initial-scale=1.0",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ]}
    />
  );
}
