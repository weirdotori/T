import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',

    server: {
        open: '/html/index.html'
    },

    build: {
        rollupOptions: {
            input: {
                home: './html/index.html',
                about: './html/about.html',
                projects: './html/projects.html',
            }
        }
    }
});