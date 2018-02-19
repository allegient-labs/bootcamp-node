const EmiCalculator = require('../EmiCalculator');

test('Gets Monthly Payment', () => {
  const calc = new EmiCalculator({
    annualInterestRate: 4.5,
    loanPeriod: 30
  });

  expect(calc.getEmi(100000)).toBeCloseTo(506.68, 1);
});
