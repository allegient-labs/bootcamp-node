const UnverifiedApplication = require('../UnverifiedApplication');

describe(UnverifiedApplication.name, () => {
  test('#init returns resolved Promise when data is valid', () => {
    const appPromise = UnverifiedApplication.init({
      name: 'p1',
      email: 'e1@c1.com'
    });
    expect(appPromise).resolves.toEqual(
      expect.objectContaining({ status: UnverifiedApplication.TYPE })
    );
  });

  test('#init returns rejected Promise when data is invalid', () => {
    const appPromise = UnverifiedApplication.init({});

    expect(appPromise).rejects.toEqual(
      expect.objectContaining({ name: ["Name can't be blank"] })
    );
  });

  test('#name', () => {
    const application = new UnverifiedApplication({
      name: 'P1',
      email: 'e1@c1.com'
    });

    expect(application.name).toBe('P1');
  });

  test('#email', () => {
    const application = new UnverifiedApplication({
      name: 'P1',
      email: 'e1@c1.com'
    });

    expect(application.email).toBe('e1@c1.com');
  });
});
