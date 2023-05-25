const getStudents = require("./getStudents");
const saveStudents = require("./saveStudents");

async function delItem(ctx) {
  if (ctx.state.login === true) {
    const id = ctx.request.body.id;
    if (id !== undefined) {
      const list = await getStudents();
      const target = list.find((elmt) => elmt.key === id);
      if (target !== undefined) {
        // console.log(index);
        list.splice(target, 1);
      } else {
        ctx.body = {
          code: 404,
          message: "Key Not Found",
        };
        return;
      }
      const res = saveStudents(list);
      if (res) {
        ctx.body = {
          code: 200,
          message: `Success: ${target.name} deleted`,
        };
      } else {
        ctx.body = {
          code: 400,
          message: "Fail to save",
        };
      }
    } else {
      ctx.body = {
        code: 400,
        message: "ID Not Received",
      };
    }
  } else {
    ctx.body = {
      code: 403,
      message: "Not logged in",
    };
  }
}

module.exports = delItem;
