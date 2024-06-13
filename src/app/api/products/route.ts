import { makeRequest } from "..";

export async function GET() {
  const res = await makeRequest("products?MaxItem=100&status=Published", "get");
  return Response.json(res);
}
