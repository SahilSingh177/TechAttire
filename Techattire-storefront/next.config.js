const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost","172.70.103.91","user-images.githubusercontent.com","172.22.16.1",],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
