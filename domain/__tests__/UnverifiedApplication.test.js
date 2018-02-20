const UnverifiedApplication = require('../UnverifiedApplication');

describe(UnverifiedApplication.name, () => {
  test('#name', () => {
    const application = new UnverifiedApplication({ name: 'Person 1' });

    expect(application.name).toBe('Person 1');
  });

  test('#email', () => {
    const application = new UnverifiedApplication({ email: 'test@email.com' });

    expect(application.email).toBe('test@email.com');
  });
});
