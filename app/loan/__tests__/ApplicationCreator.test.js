const ApplicationCreator = require('../ApplicationCreator');

describe(ApplicationCreator.name, () => {
  test('Start Loan Application.id', () => {
    const application = ApplicationCreator.start();

    expect(application.status).toBe('UNVERIFIED');
  });

  test('save application', () => {
    const creator = new ApplicationCreator({ save: jest.fn(() => true) });
    const application = ApplicationCreator.start();

    expect(creator.save(application)).toBeTruthy();
  });
});
