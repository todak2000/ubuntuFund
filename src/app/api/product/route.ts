import { makeRequest } from "..";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const res = await makeRequest(`products/${slug}/cached-by-slug-id`, "get");
  return Response.json(res);
}
