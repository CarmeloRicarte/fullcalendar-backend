const { DateTime } = require("luxon");

const isDate = (value) => {
  if (!value) return false;
  const dateForCheck = DateTime.fromJSDate(value);
  if (dateForCheck.isValid) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isDate };
