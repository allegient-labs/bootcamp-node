const ApplicationCreator = require('../ApplicationCreator');

describe(ApplicationCreator.name, () => {
  test(`#start returns saved applciation promise`, () => {
    const expectedApp = { name: 'P1', email: 'e1@test.com' };
    const dataStore = { save: jest.fn(app => Promise.resolve(app)) };

    const appPromise = new ApplicationCreator(dataStore).start(expectedApp);

    expect(appPromise).resolves.toMatchObject(expectedApp);
  });
});
