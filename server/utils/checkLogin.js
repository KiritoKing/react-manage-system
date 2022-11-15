async function checkLogin(ctx, next) {
  const user = ctx.cookies.get("user", { signed: true });
  if (user !== undefined && user !== null) {
    ctx.state.login = true;
    console.log("User authorized");
  }
  await next();
}

module.exports = checkLogin;
