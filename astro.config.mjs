import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('./public/', import.meta.url));
const publicDirectoryIndexPlugin = {
  name: 'public-directory-index',
  apply: 'serve',
  configureServer(server) {
    // Match production's trailing-slash handling for public directory indexes.
    server.middlewares.use((req, _res, next) => {
      const [pathname, query] = (req.url || '').split('?');
      const indexPath = path.resolve(publicDir, `.${pathname}`, 'index.html');
      const insidePublic = indexPath.startsWith(`${path.resolve(publicDir)}${path.sep}`);
      if (['GET', 'HEAD'].includes(req.method) && pathname.endsWith('/') && insidePublic && fs.existsSync(indexPath)) {
        req.url = `${pathname}index.html${query ? `?${query}` : ''}`;
      }
      next();
    });
  },
};

export default defineConfig({
  output: 'static',
  site: 'https://portfolio.binmahyub.uk',
  integrations: [vue()],
  vite: {
    plugins: [publicDirectoryIndexPlugin],
  },
});
