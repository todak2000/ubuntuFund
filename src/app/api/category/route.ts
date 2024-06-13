import { makeRequest } from "..";

export async function GET() {
  const res = await makeRequest("categories?IsTopCategory=true", "get");
  return Response.json(res);
}
