const UnsavedApplication = require('../UnsavedApplication');

describe(UnsavedApplication.name, () => {
  test('#init returns resolved Promise when data is valid', () => {
    const appPromise = UnsavedApplication.init({
      name: 'p1',
      email: 'e1@c1.com'
    });
    expect(appPromise).resolves.toEqual(
      expect.objectContaining({ status: UnsavedApplication.TYPE })
    );
  });

  test('#init returns rejected Promise when data is invalid', () => {
    const appPromise = UnsavedApplication.init({});

    expect(appPromise).rejects.toEqual(
      expect.objectContaining({ name: ["Name can't be blank"] })
    );
  });

  test('#name', () => {
    const application = new UnsavedApplication({
      name: 'P1',
      email: 'e1@c1.com'
    });

    expect(application.name).toBe('P1');
  });

  test('#email', () => {
    const application = new UnsavedApplication({
      name: 'P1',
      email: 'e1@c1.com'
    });

    expect(application.email).toBe('e1@c1.com');
  });
});
