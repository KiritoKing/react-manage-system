const Koa = require("koa");
const Router = require("koa-router");
const { koaBody } = require("koa-body");
const checkUser = require("./utils/checkUser");
const login = require("./utils/login");
const getUsers = require("./utils/getUsers");
const logout = require("./utils/logout");

const app = new Koa();
const router = new Router();
router.prefix("/api");
app.keys = ["dhjsalf", "dhfjidyguihfds", "huhuighvjhbhsjhak"];

router.get("/", async (ctx) => {
  ctx.body = "Successfully launched!";
});

const preProcessLogin = async (ctx, next) => {
  const user = ctx.cookies.get("user", { signed: true });
  if (user !== undefined && user !== null) {
    ctx.state.login = true;
    console.log("direct login from cookie");
  }
  const { id, pwd } = ctx.request.body;
  if (id !== undefined && pwd !== undefined) {
    // console.log(`ID:${id}\nPWD:${pwd}`);
    ctx.state.user = { id, pwd };
  }
  const users = await getUsers();
  if (users !== null) ctx.state.users = users;
  await next();
};

router.post("/login", koaBody(), preProcessLogin, checkUser, login);
router.all("/logout", logout);

app.use(router.routes()).use(router.allowedMethods());

app.listen(9001);

console.log("Server running at Port: 9001");
