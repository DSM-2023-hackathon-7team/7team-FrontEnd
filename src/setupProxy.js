const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware({
      target: "https://f130-119-203-74-86.ngrok-free.app",
      changeOrigin: true,
    })
  );
};
