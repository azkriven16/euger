import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import("next").NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

if (process.env.NODE_ENV === "development") {
    initOpenNextCloudflareForDev();
}

export default nextConfig;
