import algoliasearch from "algoliasearch/lite"

const appId = process.env.NEXT_PUBLIC_SEARCH_APP_ID || "" // You should add this to your environment variables

const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key"

export const searchClient = algoliasearch(appId, apiKey)

export const SEARCH_INDEX_NAME =
  process.env.NEXT_PUBLIC_INDEX_NAME || "products"