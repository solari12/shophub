import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
};

createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const assetPath = pathname === '/dashboard' || pathname === '/dashboard/'
    ? 'dashboard/index.html'
    : pathname === '/' || pathname === ''
      ? 'marketplace/home.html'
      : pathname === '/products' || pathname === '/products/'
        ? 'marketplace/products.html'
      : pathname === '/cart' || pathname === '/cart/'
        ? 'marketplace/cart.html'
      : pathname === '/checkout' || pathname === '/checkout/'
        ? 'marketplace/checkout.html'
        : /^\/products\/[^/]+\/?$/.test(pathname)
          ? 'marketplace/detail.html'
          : pathname.replace(/^\/+/, '');
  const absolutePath = resolve(root, assetPath);

  if (absolutePath !== root && !absolutePath.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }

  try {
    const body = await readFile(absolutePath);
    response.writeHead(200, { 'content-type': mimeTypes[extname(absolutePath)] ?? 'application/octet-stream' });
    response.end(body);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
}).listen(4173, '127.0.0.1', () => {
  console.log('ShopHub prototype: http://127.0.0.1:4173/');
});
