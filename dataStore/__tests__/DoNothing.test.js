const shortid = require('shortid');
const DoNothingDataStore = require('../DoNothing');
const UnverifiedApplication = require('../../domain/applications/Unverified');

describe(DoNothingDataStore.name, () => {
  test('#save returns an unverified application', () => {
    const unverified = new DoNothingDataStore().save({ name: 'P1' });

    expect(unverified.status).toBe(UnverifiedApplication.TYPE);
  });

  test('#save returns an unverified application with shortId', () => {
    const unverified = new DoNothingDataStore().save({ name: 'P1' });

    expect(shortid.isValid(unverified.id)).toBeTruthy();
  });
});
