async function checkUser(ctx, next) {
  if (
    ctx.state.login === undefined &&
    ctx.state.user !== undefined &&
    ctx.state.users !== undefined
  ) {
    try {
      const { id, pwd } = ctx.state.user;
      for (const user of ctx.state.users) {
        if (user.id === id && user.pwd === pwd) {
          ctx.state.login = true;
          break;
        }
      }
    } catch {
      console.error("Wrong syntax when passing context");
    }
  }
  await next();
}

module.exports = checkUser;
