const UnverifiedApplication = require('../../applications/Unverified');
const UnsavedApplication = require('../../applications/Unsaved');

describe(UnverifiedApplication.name, () => {
  test('#new copies all properities of unsaved application', () => {
    const unverified = new UnverifiedApplication(
      new UnsavedApplication({ name: 'p1', email: 'e1@test.com' })
    );

    expect(unverified).toMatchObject({ name: 'p1', email: 'e1@test.com' });
  });

  test(`#new sets status to 'UNVERIFIED'`, () => {
    const unverified = new UnverifiedApplication();
    expect(unverified.status).toEqual(UnverifiedApplication.TYPE);
  });
});
