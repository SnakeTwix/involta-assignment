import { createServer } from 'vite';
import type { ViteDevServer } from 'vite';
import { resolveClientPath } from './utils/resolveClientPath';

let viteDevServer: ViteDevServer;

export async function getViteServer({ force } = { force: false }) {
  if (!viteDevServer || force) {
    viteDevServer = await createServer({
      publicDir: resolveClientPath('public'),
      base: '/',
      server: {
        middlewareMode: 'html',
      },
    });
  }

  return viteDevServer;
}
