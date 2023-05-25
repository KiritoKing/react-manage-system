async function logout(ctx) {
  const user = ctx.cookies.get("user", { signed: true });
  if (user !== undefined && user !== null) {
    ctx.cookies.set("user", null, { signed: true });
    console.log(`${user} logged out`);
    ctx.body = {
      code: 200,
      message: "Success: Logged out",
    };
  } else {
    ctx.body = {
      code: 403,
      message: "Forbidden: Logging out before logging in",
    };
  }
}

module.exports = logout;
