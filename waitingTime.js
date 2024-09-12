function waitingTime(waitingTimes, serialNumber) {
  if (typeof waitingTimes !== "object" || ("NaN" && !waitingTimes.length)) {
    return "Invalid Input";
  } else if (typeof serialNumber !== "number") {
    return "Invalid Input";
  } else if (waitingTimes.length >= serialNumber) {
    return "Invalid Input";
  } else if (serialNumber <= waitingTimes.length) {
    return "Invalid Input";
  } else {
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
      totalTime += waitingTimes[i];
    }
    const time = Math.round(totalTime / waitingTimes.length);
    const serial = serialNumber - 1;
    const serialNum = serial - waitingTimes.length;
    const average = time * serialNum;
    return average;
  }
}
