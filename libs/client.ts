import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: "e6fnsxvyen",
  apiKey: process.env.API_KEY || "",
  
});
