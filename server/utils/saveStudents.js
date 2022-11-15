const fs = require("fs");
const path = require("path");

const dataPath = path.join(process.cwd(), "server/data/students.json");

async function saveStudents(list) {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(list, null, 2));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
module.exports = saveStudents;
