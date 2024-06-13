import { productIndex } from "@/lib/components/constants/products";

import { AlgoliaClient } from "..";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const productsIndex = AlgoliaClient.initIndex(productIndex);

  const res = await productsIndex.search(query as string);
  return Response.json(res);
}
