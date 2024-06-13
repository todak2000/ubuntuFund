
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const baseUrl = `${process.env.BE_API}/api/v1`;

interface Headers {
  [key: string]: string;
}

interface Options {
  method: string;
  headers: Headers;
  body?: string;
}

export async function makeRequest(
  url: string,
  method: string,
  data?: any | null
) {
  const token: RequestCookie | undefined = cookies().get("rena_token");

  const headers: Headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token.value}`;
  }

  const options: Options = {
    method: method,
    headers: headers,
  };

  if (method !== "GET" && method !== "get" && data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(`${baseUrl}/${url}`, options);

  const responseData = await res.json();
  return responseData;
}


export async function makeExternalRequest(
  url: string,
  method: string,
  data?: any | null
) {

  const headers: Headers = {
    "Content-Type": "application/json",
  };

 
  const options: Options = {
    method: method,
    headers: headers,
  };

  if (method !== "GET" && method !== "get" && data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(`${url}`, options);

  const responseData = await res.json();
  return responseData;
}
