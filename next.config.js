module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["reqres.in", "picsum.photos", "rotulosmatesanz.com"],
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/next/" : "",
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },

  webpack: {
    experiments: {
      layers: true,
    },
  },
};
