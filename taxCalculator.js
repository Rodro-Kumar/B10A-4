function calculateTax(income, expenses) {
  const capital = income - expenses;
  const tax = capital * 0.2;
  if (expenses > income || expenses < 0 || income < 0) {
    return "Invalid Input";
  } else {
    return tax;
  }
}
