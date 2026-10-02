import { defineConfig } from "vite";

const host = {
  host: "0.0.0.0",
  port: 47291,
  strictPort: true,
  allowedHosts: true,
};

export default defineConfig({
  server: host,
  preview: host,
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        play: "play.html",
      },
    },
  },
  plugins: [
    {
      name: "play-shortcut",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/play" || req.url === "/play/") req.url = "/play.html";
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/play" || req.url === "/play/") req.url = "/play.html";
          next();
        });
      },
    },
  ],
});
