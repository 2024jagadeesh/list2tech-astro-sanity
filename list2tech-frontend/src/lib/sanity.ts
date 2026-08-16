import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "l9qchlz1",
  dataset: "production",
  apiVersion: "2026-08-12",
  useCdn: false,
});
