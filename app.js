const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

// 模拟数据
const mockData = require('./data.json');
const seller = mockData.seller;
const goods = mockData.goods;
const ratings = mockData.ratings;

const app = new Koa();
const router = new Router();

// 静态文件路径
const staticPath = path.join(__dirname, './static');

router.get('/api/seller', (ctx, next) => {
  ctx.body = { errno: 0, data: seller };
});

router.get('/api/goods', (ctx, next) => {
  ctx.body = { errno: 0, data: goods };
});

router.get('/api/ratings', (ctx, next) => {
  ctx.body = { errno: 0, data: ratings };
});

// 加载中间件
app.use(static(staticPath));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, '127.0.0.1');