const EmiCalculator = require('./EmiCalculator');

class Applicant {
  constructor({ creditScore, downPayment, annualIncome }) {
    this.monthlyIncome = annualIncome / 12;
    this.downPayment = downPayment;
    this.interestRange = selectInterestRateRange(creditScore);
  }
}

class Property {
  constructor({ price }) {
    this.price = price;
    this.propertyTax = 5 / 100;
    this.homeInsurance = price * 1 / 100;
  }
}

class Application {
  constructor(applicant, property) {
    this.applicant = applicant;
    this.property = property;

    this.emiCalc = new EmiCalculator({
      principal: this.property.price,
      loanPeriodInYears: 30 * 12
    });

    this.totalMonthlyPayment = this.totalMonthlyPayment.bind(this);
  }

  bestInterestRate() {
    const rate = this.applicant.interestRange.rates.find(rate =>
      rate.doesQualify(this.applicant.monthlyIncome, this.totalMonthlyPayment)
    );

    return rate && rate.interest;
  }

  totalMonthlyPayment(interest) {
    const payment =
      this.emiCalc.emi(interest) +
      this.property.price * this.property.tax / 12 +
      this.property.insurance / 12;

    return this.applicant.downPayment < 0.2 * this.property.price
      ? payment
      : this.property.price * 1 / 100 / 12;
  }
}

function selectInterestRateRange(creditScore) {
  return PRIORITY_INTEREST_RATES.find(range => range.doesQualify(creditScore));
}

const PRIORITY_INTEREST_RATES = [
  {
    type: 'GOOD',
    rates: [
      {
        interest: 3,
        doesQualify: (monthlyIncome, monthlyPaymentCalculator) => {
          let tmPayment = monthlyPaymentCalculator(3);
          return tmPayment <= 0.28 * monthlyIncome;
        }
      },
      {
        interest: 4,
        doesQualify: (monthlyIncome, monthlyPaymentCalculator) => {
          let tmPayment = monthlyPaymentCalculator(4);
          return (
            tmPayment > 0.28 * monthlyIncome &&
            tmPayment <= 0.35 * monthlyIncome
          );
        }
      }
    ],
    doesQualify(creditScore) {
      return creditScore >= 750;
    }
  },
  {
    type: 'AVERAGE',
    rates: [
      {
        interest: 4,
        doesQualify: (monthlyIncome, monthlyPaymentCalculator) => {
          let tmPayment = monthlyPaymentCalculator(4);
          return tmPayment <= 0.28 * monthlyIncome;
        }
      },
      {
        interest: 5,
        doesQualify: (monthlyIncome, monthlyPaymentCalculator) => {
          let tmPayment = monthlyPaymentCalculator(5);
          return (
            tmPayment > 0.28 * monthlyIncome &&
            tmPayment <= 0.35 * monthlyIncome
          );
        }
      }
    ],
    doesQualify(creditScore) {
      return creditScore >= 600 && creditScore < 750;
    }
  },
  {
    type: 'BAD',
    rates: [
      {
        interest: 5,
        doesQualify: (monthlyIncome, monthlyPaymentCalculator) => {
          let tmPayment = monthlyPaymentCalculator(5);
          return tmPayment <= 0.28 * monthlyIncome;
        }
      },
      {
        interest: 6,
        doesQualify: (monthlyIncome, monthlyPaymentCalculator) => {
          let tmPayment = monthlyPaymentCalculator(6);
          return (
            tmPayment > 0.28 * monthlyIncome &&
            tmPayment <= 0.35 * monthlyIncome
          );
        }
      }
    ],
    doesQualify(creditScore) {
      return creditScore < 600;
    }
  }
];

module.exports = { Application, Applicant, Property };
