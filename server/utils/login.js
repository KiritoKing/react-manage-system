async function login(ctx) {
  if (ctx.state.login === true) {
    console.log(`${ctx.state.user.id} Logged In`);
    ctx.cookies.set("user", ctx.state.user.id, { signed: true });
    ctx.body = {
      code: 200,
      status: true,
      user: ctx.state.user.id,
      message: "Success",
    };
  } else {
    // console.log("Fail logging in");
    ctx.cookies.set("user", null, { signed: true });
    ctx.body = {
      code: 403,
      status: false,
      message: "Forbidden request",
    };
  }
}

module.exports = login;
