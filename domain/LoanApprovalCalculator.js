const EmiCalculator = require('./EmiCalculator');

class LoanApprovalCalculator {
  constructor({ creditScore, downPayment, principal, annualIncome }) {
    this.annualIncome = annualIncome;
    this.downPayment = downPayment;
    this.principal = principal;

    this.propertyTax = 5 / 100;
    this.homeInsurance = principal * 1 / 100;

    this.interestRate = interestRateRange(creditScore);
    this.emiCalc = new EmiCalculator({
      principal: this.principal,
      loanPeriodInYears: 30 * 12
    });
  }

  bestInterestRate() {
    const monthlyIncome = this.annualIncome / 12;

    let tmPayment = this.totalMonthlyPayment(this.interestRate.primary);
    if (tmPayment <= 0.28 * monthlyIncome) {
      return this.interestRate.primary;
    }

    tmPayment = this.totalMonthlyPayment(this.interestRate.secondary);
    if (tmPayment > 0.28 * monthlyIncome && tmPayment <= 0.35 * monthlyIncome) {
      return this.interestRate.secondary;
    }

    tmPayment = this.totalMonthlyPayment(this.interestRate.tertiary);
    if (tmPayment > 0.35 * monthlyIncome) {
      return this.interestRate.tertiary;
    }
  }

  totalMonthlyPayment(interest) {
    const payment =
      this.emiCalc.calcEmi(interest) +
      this.principal * this.propertyTax / 12 +
      this.homeInsurance / 12;

    return this.downPayment < 0.2 * this.principal
      ? payment
      : this.principal * 1 / 100 / 12;
  }
}

function interestRateRange(creditScore) {
  const INTEREST_RATES = {
    good: { primary: 3, secondary: 4, tertiary: 'DENIED' },
    average: { primary: 4, secondary: 5, tertiary: 'DENIED' },
    bad: { primary: 5, secondary: 6, tertiary: 'DENIED' }
  };

  if (creditScore >= 750) {
    return INTEREST_RATES.good;
  }

  if (creditScore >= 600 && creditScore < 750) {
    return INTEREST_RATES.average;
  }

  if (creditScore < 600) {
    return INTEREST_RATES.bad;
  }
}

module.exports = LoanApprovalCalculator;
