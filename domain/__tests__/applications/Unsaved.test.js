const UnsavedApplication = require('../../applications/Unsaved');

describe(UnsavedApplication.name, () => {
  test('#init returns resolved Promise when data is valid', () => {
    const appPromise = UnsavedApplication.initIfValid({
      name: 'p1',
      email: 'e1@c1.com'
    });
    expect(appPromise).resolves.toMatchObject({
      status: UnsavedApplication.TYPE
    });
  });

  test('#init returns rejected Promise when data is invalid', () => {
    const appPromise = UnsavedApplication.initIfValid({});

    expect(appPromise).rejects.toMatchObject({ name: ["Name can't be blank"] });
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
