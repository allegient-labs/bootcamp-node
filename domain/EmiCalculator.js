class EmiCalculator {
  constructor({ principal, loanPeriodInYears }) {
    this.principal = principal;
    this.numOfPayments = loanPeriodInYears * 12;
  }

  emi(annualInterestRate) {
    const interestRate = annualInterestRate / 12 / 100;
    const balanceRate = Math.pow(1 + interestRate, this.numOfPayments);

    const emi = interestRate * this.principal * balanceRate / (balanceRate - 1);
    return round(emi);
  }
}

function round(num) {
  return Math.round(num * 100) / 100;
}

module.exports = EmiCalculator;
