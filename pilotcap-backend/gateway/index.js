const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/api/users', createProxyMiddleware({ target: 'http://user-service:5000', changeOrigin: true }));
app.use('/api/investments', createProxyMiddleware({ target: 'http://investment-service:5001', changeOrigin: true }));

app.listen(80, () => console.log('API Gateway running on port 80'));
