const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/search',
    createProxyMiddleware({
      target: 'https://serpapi.com',
      changeOrigin: true,
      onProxyRes: (proxyRes) => {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
      pathRewrite: (path, req) => {
        const { q, htichips, start } = req.query;
        return `/search?q=${q}&engine=google_events&htichips=${htichips}&start=${start}&source=nodejs&output=json&api_key=4d4f1a185a4e0acb10682c3138690aab6dc19eea1df2a242b99f86a4c8bb4a9e`;
      },
    })
  );
};
