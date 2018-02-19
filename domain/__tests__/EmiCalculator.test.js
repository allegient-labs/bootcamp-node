const EmiCalculator = require('../EmiCalculator');

test('Periodic Interest Rate', () => {
  const calc = new EmiCalculator({
    annualInterestRate: 10,
    loanPeriodInYears: 1
  });

  expect(calc.interestRate).toBeCloseTo(0.0083, 4);
});

test('Total number of payments', () => {
  const calc = new EmiCalculator({
    annualInterestRate: 1,
    loanPeriodInYears: 1
  });

  expect(calc.numOfPayments).toBe(12);
});

test('Equated Monthly Installment', () => {
  const calc = new EmiCalculator({
    annualInterestRate: 1,
    loanPeriodInYears: 1
  });

  expect(calc.getEmi(100)).toBeCloseTo(8.38, 1);
});
