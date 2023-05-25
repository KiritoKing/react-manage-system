const fs = require("fs");
const path = require("path");
const saveStudents = require("./saveStudents");

const dataPath = path.join(process.cwd(), "server/data/students.json");

async function getStudents() {
  try {
    const res = fs.readFileSync(dataPath);
    if (res !== "") return JSON.parse(res.toString());
    else {
      saveStudents([]);
      return [];
    }
  } catch (err) {
    console.error(err);
    saveStudents([]);
    return [];
  }
}

module.exports = getStudents;
