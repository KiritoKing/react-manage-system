const getStudents = require("./getStudents");
const saveStudents = require("./saveStudents");
const checkValid = require("./checkValid");

async function addItem(ctx) {
  if (ctx.state.login === true) {
    const item = ctx.request.body;
    console.log(item);
    const list = await getStudents();
    if (checkValid(item)) {
      list.push(item);
      const res = saveStudents(list);
      if (res) console.log("Save success");
      ctx.body = {
        code: 200,
        message: "Success",
        data: item,
      };
    } else {
      ctx.body = {
        code: 403,
        message: "Not Valid Item",
      };
    }
  } else {
    ctx.body = {
      code: 403,
      message: "Not Logged In",
    };
  }
}

module.exports = addItem;
