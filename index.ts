// index.ts
export default {
    async fetch(request: Request, env: any, ctx: any): Promise<Response> {
      // 获取请求的 URL
      const url = new URL(request.url);
  
      // 如果请求的是根路径，返回 index.html
      if (url.pathname === "/") {
        return new Response("Hello, World!", {
          status: 200,
          headers: {
            "content-type": "text/html",
          },
        });
      }
  
      // 返回 404 页面
      return new Response("Not Found", {
        status: 404,
        headers: {
          "content-type": "text/plain",
        },
      });
    },
  };