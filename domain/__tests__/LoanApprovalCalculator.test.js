const x = require('../LoanApprovalCalculator');

const Application = x.Application;
const Applicant = x.Applicant;
const Property = x.Property;

describe(Application.name, () => {
  test('bestInterestRate', () => {
    const loan = new Application(
      new Applicant({
        annualIncome: 12000,
        creditScore: 750,
        downPayment: 2000
      }),
      new Property({ price: 300 * 12 })
    );

    expect(loan.bestInterestRate()).toBe(3);
    expect(loan.totalMonthlyPayment(2)).toBe(3);
  });
});
