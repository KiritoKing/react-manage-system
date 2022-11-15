const fs = require("fs");
const path = require("path");

const dataPath = path.join(process.cwd(), "server/data/students.json");

async function getStudents() {
  try {
    const res = fs.readFileSync(dataPath);
    // console.log("Successfully read from data/users.json");
    return JSON.parse(res.toString());
  } catch (err) {
    console.error(err);
  }
}

module.exports = getStudents;
