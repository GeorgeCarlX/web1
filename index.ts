// index.ts
export default {
    async fetch(request: Request) {
        const url = new URL(request.url);
        if (url.pathname === '/api') {
            return new Response("Hello from Cloudflare Worker!");
        } else if (url.pathname === '/' || url.pathname === '/index.html') {
            const response = await fetch('https://web1.ddragonwfish.workers.dev/'); // 替换为你的实际域名
            return response;
        }
        return new Response("Not Found", { status: 404 });
    },
};