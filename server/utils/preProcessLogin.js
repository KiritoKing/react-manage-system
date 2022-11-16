const getUsers = require("./getUsers");

const preProcessLogin = async (ctx, next) => {
  const user = ctx.cookies.get("user", { signed: true });
  if (user !== undefined && user !== null) {
    ctx.state.login = true;
    console.log("Login using cookie!");
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

module.exports = preProcessLogin;
