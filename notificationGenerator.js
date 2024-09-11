function sendNotification(email) {
  const extract = email.split("@");
  if (email.includes("@")) {
    return `${extract[0]} sent you an email from ${extract[1]}`;
  } else if (!email.includes("@")) {
    return "Invalid Email";
  } else {
    return email;
  }
}
