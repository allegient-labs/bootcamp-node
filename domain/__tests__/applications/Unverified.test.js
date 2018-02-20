const UnverifiedApplication = require('../../applications/Unverified');
const UnsavedApplication = require('../../applications/Unsaved');

describe(UnverifiedApplication.name, () => {
  test('#new copies all properities of unsaved application', () => {
    const unverified = new UnverifiedApplication(
      null,
      new UnsavedApplication({ name: 'p1' })
    );
    expect(unverified.name).toEqual('p1');
  });

  test('#new sets id', () => {
    const unverified = new UnverifiedApplication('id1', null);
    expect(unverified.id).toEqual('id1');
  });

  test(`#new sets status to 'UNVERIFIED'`, () => {
    const unverified = new UnverifiedApplication();
    expect(unverified.status).toEqual(UnverifiedApplication.TYPE);
  });
});
