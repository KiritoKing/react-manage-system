const getStudents = require("./getStudents");

async function getStuPage(ctx) {
  const all = await getStudents();
  // console.log("all length:", all.length);
  if (ctx.state.page !== undefined && ctx.state.page * 5 < all.length) {
    const start = ctx.state.page * 5;
    const end = start + 5;
    const res = all.slice(start, end);
    console.log(res);
    ctx.body = {
      code: 200,
      message: `Success: Get Page${ctx.state.page}`,
      data: res,
    };
  } else {
    ctx.body = {
      code: 200,
      message: "Warn: Get all pages",
      data: all,
    };
  }
}

module.exports = getStuPage;
