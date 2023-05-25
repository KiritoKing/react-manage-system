async function getPagination(ctx, next) {
  if (ctx.state.login === true) {
    if (ctx.query.page !== undefined) {
      const page = parseInt(ctx.query.page);
      if (!isNaN(page)) {
        ctx.state.page = page;
        // console.log(ctx.state.page);
        await next();
      } else {
        ctx.body = {
          code: 404,
          message: "Wrong Page",
        };
      }
    } else {
      // 得到全部列表
      await next();
    }
  }
}

module.exports = getPagination;
