const LoanApprovalCalculator = require('../LoanApprovalCalculator');
const funcs = LoanApprovalCalculator.prototype;

describe(LoanApprovalCalculator.name, () => {
  test(funcs.bestInterestRate.name, () => {
    const loan = new LoanApprovalCalculator({
      creditScore: 750,
      downPayment: 20,
      principal: 100,
      annualIncome: 50
    });

    expect(loan.bestInterestRate()).toBe(3);
  });
});
