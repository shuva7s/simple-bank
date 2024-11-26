export async function GET() {
  //   return new Response("Hello from Next.js!");
  return new Response("Hello from Next.js!", {
    status: 200,
  });
  // add status code
}
