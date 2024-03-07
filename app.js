const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(koaStatic(path.join(__dirname, './dist')));

const port = 8222;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});