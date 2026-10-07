import { defineConfig } from 'vite';

export default defineConfig({
    // Relative URLs in the built CSS, so icon fonts load no matter where the app is mounted
    base: './',
    build: {
        outDir: 'webroot',
        emptyOutDir: false,
        // Bootstrap, Popper and Bootstrap Icons are MIT licensed, which requires
        // their notices to ship with every copy - minification strips them from the bundles.
        license: { fileName: 'THIRD_PARTY_LICENSES.md' },
        rollupOptions: {
            input: {
                app: 'resources/js/app.js',
            },
            output: {
                entryFileNames: 'js/[name].js',
                assetFileNames: (asset) => /\.(woff2?|ttf|eot)$/.test(asset.names[0] ?? '')
                    ? 'css/fonts/[name][extname]'
                    : 'css/[name][extname]',
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Bootstrap 5.3 still uses @import and global Sass functions internally
                silenceDeprecations: ['color-functions', 'import', 'global-builtin', 'if-function'],
            },
        },
    },
});
