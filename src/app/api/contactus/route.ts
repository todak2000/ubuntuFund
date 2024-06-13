import { makeExternalRequest } from "..";

const contactUsUrl = `${process.env.CONTACTUS_URL}`;
export async function POST(req: Request) {
  const data: any = await req.json();
  const res = await makeExternalRequest(contactUsUrl, "post", data);
  return Response.json(res);
}
