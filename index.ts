export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === "/api") {
      return new Response("Hello from Cloudflare Worker API!", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    }

    // 其余请求都返回静态页面（index.html）
    return fetch("https://" + url.hostname + "/index.html", request);
  },
};

  