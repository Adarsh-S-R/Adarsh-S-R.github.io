import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const lastModified = new Date().toISOString().slice(0, 10);
const siteUrl = "https://adarsh.triada.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/photos/og-image.png`,
        `${siteUrl}/photos/A_sq.png`,
        `${siteUrl}/photos/team.png`,
        `${siteUrl}/photos/Adarsh_triada.jpg`,
        `${siteUrl}/photos/team.jpg`,
        `${siteUrl}/photos/img_null.jpg`,
        `${siteUrl}/photos/Seasides_thv.jpg`,
        `${siteUrl}/photos/vulnteam.jpg`,
      ],
    },
  ];
}
