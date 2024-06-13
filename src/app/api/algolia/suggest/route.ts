import { productIndex } from "@/lib/components/constants/products";

import { AlgoliaSuggestClient } from "..";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const objectID = searchParams.get("objectID");
  const resSuggest = await AlgoliaSuggestClient.getRelatedProducts([
    {
      indexName: productIndex,
      objectID: objectID as string,
    },
  ]);

  return Response.json(resSuggest);
}
