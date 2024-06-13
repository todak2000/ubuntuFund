import { productIndex } from "@/lib/components/constants/products";

import { AlgoliaClient } from "..";

export async function GET() {
  const productsIndex = AlgoliaClient.initIndex(productIndex);

  let hits: any = [];

  await productsIndex.browseObjects({
    batch: (batch) => {
      hits = hits.concat(batch);
    },
  });
  return Response.json(hits);
}
