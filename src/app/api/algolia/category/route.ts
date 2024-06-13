import { categoriesIndex } from "@/lib/components/constants/products";

import { AlgoliaClient } from "..";

export async function GET() {
  const categoryIndex = AlgoliaClient.initIndex(categoriesIndex);

  let hits: any = [];

  await categoryIndex.browseObjects({
    batch: (batch) => {
      hits = hits.concat(batch);
    },
  });
  return Response.json(hits);
}
