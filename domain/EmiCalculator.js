class EmiCalculator {
  constructor({ annualInterestRate, loanPeriodInYears }) {
    this.interestRate = annualInterestRate / 12 / 100;
    this.numOfPayments = loanPeriodInYears * 12;
  }

  calcEmi(principal) {
    const balanceRate = Math.pow(1 + this.interestRate, this.numOfPayments);

    const emi = this.interestRate * principal * balanceRate / (balanceRate - 1);
    return round(emi);
  }
}

function round(num) {
  return Math.round(num * 100) / 100;
}

module.exports = EmiCalculator;
