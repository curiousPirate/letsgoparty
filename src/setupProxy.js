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
        return `/search?q=${q}&engine=google_events&htichips=${htichips}&start=${start}&source=nodejs&output=json&api_key=348e8db09351ac50bd0d138aa02fa794c792d94070d5fc3a628ea00c94025b64`;
      },
    })
  );
};
