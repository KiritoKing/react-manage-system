const fs = require("fs");
const path = require("path");

const dataPath = path.join(process.cwd(), "server/data/users.json");

async function getUsers() {
  try {
    const res = fs.readFileSync(dataPath);
    const obj = JSON.parse(res.toString());
    // console.log("Successfully read from data/users.json");
    // console.log(obj);
    return JSON.parse(res.toString());
  } catch (err) {
    console.log("No user info file found. Creating one...");
    try {
      const initUser = [{ id: "admin", pwd: "123456" }];
      fs.writeFileSync(dataPath, JSON.stringify(initUser, null, 2));
      // console.log("File created!");
      // console.log(initUser);
      return initUser;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

getUsers();

module.exports = getUsers;
