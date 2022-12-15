const { DateTime } = require("luxon");

const isDate = (value) => {
  if (!value) return false;
  const dateForCheck = DateTime.fromISO(value);
  if (dateForCheck.isValid) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isDate };
