const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = 'Hi there, this is fbs';
});

router.get('/home', ctx => ctx.body = 'this is home');

app.use(router.routes());

app.listen(3000);