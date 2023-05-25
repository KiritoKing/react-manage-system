const checkValid = require("./checkValid");
const getStudents = require("./getStudents");
const saveStudents = require("./saveStudents");

async function modifyItem(ctx) {
  if (ctx.state.login === true) {
    const { id, data } = ctx.request.body;
    if (id !== undefined && data !== undefined && checkValid(data)) {
      const list = await getStudents();
      const target = list.find((elmt) => elmt.key === id);
      if (target !== undefined) {
        list.splice(target, 1, data);
        const res = saveStudents(list);
        if (res) {
          ctx.body = {
            code: 200,
            message: "Sucess",
          };
        } else {
          ctx.body = {
            code: 400,
            message: "Fail to save",
          };
        }
      } else {
        ctx.body = {
          code: 404,
          message: "Id not found",
        };
      }
    } else {
      ctx.body = {
        code: 400,
        message: "invalid data",
      };
    }
  } else {
    ctx.body = {
      code: 403,
      message: "Not Logged In",
    };
  }
}

module.exports = modifyItem;
