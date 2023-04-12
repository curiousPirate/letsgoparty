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
        return `/search?q=${q}&engine=google_events&htichips=${htichips}&start=${start}&source=nodejs&output=json&api_key=b40cf362d7bd15ae459eac770677ffc8e1e890ac7291ecb0dc55b3b6cee66b70`;
      },
    })
  );
};
