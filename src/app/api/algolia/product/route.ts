import { productIndex } from "@/lib/components/constants/products";

import { AlgoliaClient } from "..";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const objectID = searchParams.get("objectID");
  const productsIndex = AlgoliaClient.initIndex(productIndex);
  let prodObj = {};
  await productsIndex.getObject(objectID as string).then((product) => {
    prodObj = product;
  });
  return Response.json(prodObj);
}