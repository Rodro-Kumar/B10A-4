function calculateFinalScore(obj) {
  if (
    obj?.name !== "" &&
    typeof obj?.name == "string" &&
    obj?.testScore >= 0 &&
    obj?.testScore <= 50 &&
    typeof obj?.testScore == "number" &&
    obj?.schoolGrade >= 0 &&
    obj?.schoolGrade <= 30 &&
    typeof obj?.schoolGrade == "number" &&
    obj?.isFFamily === true &&
    typeof obj?.isFFamily == "boolean"
  ) {
    return true;
  } else if (typeof obj !== "object" || (typeof obj == "object" && !obj.name)) {
    return "Invalid Input";
  } else {
    return false;
  }
}
