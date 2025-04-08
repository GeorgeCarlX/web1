export default {
    async fetch(request: Request) {
        const url = new URL(request.url);
        if (url.pathname === '/api') {
            return new Response("Hello from Cloudflare Worker!");
        }
        return new Response("Not Found", { status: 404 });
    },
};