const EmiCalculator = require('../EmiCalculator');

test('principal', () => {
  const calc = new EmiCalculator({ principal: 100 });

  expect(calc.principal).toBe(100);
});

test('Total number of payments', () => {
  const calc = new EmiCalculator({ loanPeriodInYears: 1 });

  expect(calc.numOfPayments).toBe(12);
});

test('Equated Monthly Installment', () => {
  const calc = new EmiCalculator({
    principal: 100,
    loanPeriodInYears: 1 / 12
  });

  // principal   = $100
  // loan period = 1 month
  // interest    = 1% per month
  //      => EMI = $101
  expect(calc.calcEmi(12)).toBe(101);
});
