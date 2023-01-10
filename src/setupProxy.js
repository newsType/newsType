const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/biztoc', {
      target: 'https://biztoc.com/',
      pathRewrite: {
        '^/biztoc': '',
      },
      changeOrigin: true,
    }),
  );
};
