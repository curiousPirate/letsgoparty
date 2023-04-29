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
        return `/search?q=${q}&engine=google_events&htichips=${htichips}&start=${start}&source=nodejs&output=json&api_key=99e862960da1f6c3c8cfcc8f6ba4f35968cee4846f4411a8a8e75b8e697c3d9e`;
      },
    })
  );
};
