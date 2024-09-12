function checkDigitsInName(name) {
  const digit = /\d/.test(name);
  if (digit === true && typeof name === "string") {
    return true;
  } else if ((typeof name !== "string" && digit === false) || digit === true) {
    return "Invalid Input";
  } else {
    return false;
  }
}
