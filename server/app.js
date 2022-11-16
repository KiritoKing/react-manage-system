const Koa = require("koa");
const Router = require("koa-router");
const { koaBody } = require("koa-body");
const Static = require("koa-static");
const path = require("path");

const checkUser = require("./utils/checkUser");
const login = require("./utils/login");
const logout = require("./utils/logout");
const checkLogin = require("./utils/checkLogin");
const getPagination = require("./utils/getPagination");
const getStuPage = require("./utils/getStuPage");
const addItem = require("./utils/addItem");
const delItem = require("./utils/delItem");
const modifyItem = require("./utils/modifyItem");
const preProcessLogin = require("./utils/preProcessLogin");

const app = new Koa();
const router = new Router();
router.prefix("/api");
app.keys = ["dhjsalf", "dhfjidyguihfds", "huhuighvjhbhsjhak"];

router.get("/", async (ctx) => {
  ctx.body = "Successfully launched!";
});

router.post("/login", koaBody(), preProcessLogin, checkUser, login);
router.all("/logout", logout);
router.get("/stu/list", checkLogin, getPagination, getStuPage);
router.post("/stu/add", koaBody(), checkLogin, addItem);
router.post("/stu/del", koaBody(), checkLogin, delItem);
router.post("/stu/modify", koaBody(), checkLogin, modifyItem);

const root = process.cwd();
app.use(Static(path.join(root, "fe/build")));

app.use(router.routes()).use(router.allowedMethods());

app.listen(9001);

console.log("Server running at Port: 9001");
