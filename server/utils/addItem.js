const getStudents = require("./getStudents");
const saveStudents = require("./saveStudents");

const checkValidItem = (item) => {
  if (item === undefined || item === {}) return false;
  if (item.key === undefined) return false;
  if (item.name === undefined) return false;
  if (item.faculty === undefined) return false;
  if (item.grade === undefined) return false;
  if (item.gender === undefined) return false;
  if (item.tel === undefined) return false;
  if (item.mail === undefined) return false;
  return true;
};

async function addItem(ctx) {
  if (ctx.state.login === true) {
    const item = ctx.request.body;
    console.log(item);
    const list = await getStudents();
    if (checkValidItem(item)) {
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
