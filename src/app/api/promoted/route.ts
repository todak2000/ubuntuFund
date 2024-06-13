import { makeRequest } from "..";

export async function GET() {
  const res = await makeRequest("contentmanagement/promoted-product", "get");
  return Response.json(res);
}
