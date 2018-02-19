class EmiCalculator {
  constructor({ annualInterestRate, loanPeriodInYears }) {
    this.interestRate = annualInterestRate / 100 * 12;
    this.numOfPayments = loanPeriodInYears * 12;
  }

  getEmi(principal) {
    const balanceRate = Math.pow(1 + this.interestRate, this.numOfPayments);

    const emi = principal * this.interestRate * balanceRate / (balanceRate - 1);
    return round(emi);
  }
}

function round(num) {
  return Math.round(num * 100) / 100;
}

module.exports = EmiCalculator;
