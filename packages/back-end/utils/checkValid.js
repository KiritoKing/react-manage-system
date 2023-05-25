const checkValid = (item) => {
  if (item === undefined || item === {}) return false;
  if (item.key === undefined) return false;
  if (item.id === undefined) return false;
  if (item.name === undefined) return false;
  if (item.faculty === undefined) return false;
  if (item.grade === undefined) return false;
  if (item.gender === undefined) return false;
  if (item.tel === undefined) return false;
  if (item.mail === undefined) return false;
  return true;
};

module.exports = checkValid;
